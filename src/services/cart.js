import prisma from "../lib/prisma.js";

export const getOrCreateCart = async (userId) =>{
    let cart = await prisma.cart.findFirst({
        where: {user_id:userId, status: 'PENDING'},
    })

    if(!cart) {
        cart = await prisma.cart.create({
            data:{user_id:userId}
        });
    }
    return cart
};

export const getCart = async (userId) =>{
    const cart = await getOrCreateCart(userId);

    return await prisma.cart.findUnique({
        where:{id: cart.id},
        include:{ 
            cart_item:{
                include:{products:true}
            }
        }
    });
};

export const addItemToCart = async (userId, productId, cantidad = 1) =>{
    const product = await prisma.products.findUnique({
        where: {id: productId}
    });
    if(!product){
        const error = new Error ("producto no encontrado")
        error.statusCode = 404
        throw error;
    };
    if(product.stock < cantidad){
        const error = new Error ("no tenemos suficiente cantidad")
        error.statusCode = 400;
        throw error
    };
    const cart = await getOrCreateCart(userId);

    return await prisma.cart_item.upsert({
        where: {
            cart_id_product_id:{
                cart_id: cart.id,
                product_id: product.id
            }
        },
        update: {
            cantidad:{ increment: cantidad
            }
        },
            create: {
                cart_id: cart.id,
                product_id: product.id,
                cantidad
        }
    })
};

const findOwnedCartItem = async (userId, itemId) =>{
    const item = await prisma.cart_item.findUnique({
        where: {id: itemId},
        include: {cart: true}
    })
    if(!item || item.cart.user_id !== userId) {
        const error = new Error ("Item no encontrado en tu carrito")
        error.statusCode = 404
        throw error;
    }
    return item
};

export const updateCartItemQuantity = async (userId, itemId, cantidad) =>{
    await findOwnedCartItem(userId, itemId);

    if(cantidad <= 0) {
        return await prisma.cart_item.delete({
            where: {id: itemId}
        })
    }
    return await prisma.cart_item.update({
        where: {id: itemId},
        data: {cantidad}
    });
};

export const removeCartItem = async (userId, itemId) =>{
    await findOwnedCartItem(userId, itemId);
    
    return await prisma.cart_item.delete({
        where: {id: itemId}
    });
};

export const clearCart = async (userId) =>{
    const cart = await getOrCreateCart(userId)

    return await prisma.cart_item.deleteMany({
        where:{ cart_id: cart.id}
    })
};

export const checkoutCart = async (userId) =>{
    const cart = await prisma.cart.findFirst({
        where: {user_id: userId, status: 'PENDING'},
        include: { cart_item: true}
    });
    if(!cart | cart.cart_item.length === 0){
        const error = new Error ("El carrito esta vacio")
        error.statusCode = 400;
        throw error;
    }

    return await prisma.cart.update({
        where:{ id: cart.id},
        data: { status: 'CHECKED_OUT'},
        include: {
            cart_item:{

            include: {products: true}
           }   
        }
    });
};