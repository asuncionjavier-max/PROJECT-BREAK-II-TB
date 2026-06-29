import { Wishlist } from "../config/modelWishlist.js";

import prisma from "../lib/prisma.js";

export const getWishlist = async ({userId}) =>{

const wishlistUser = await Wishlist.find({
    supabase_user_id: userId,
});
return wishlistUser
};

export const addProductWishlist = async ({userId,productId}) =>{
    
    const product = await prisma.products.findUnique({
        where: {id: productId},
        select: {nombre: true, stock: true},
    })
    if(!product){
        const error = new Error ("El producto que buscas no existe")
        error.statusCode = 404;
        throw error 
    };
    const productAdded = await Wishlist.create({
        supabase_product_id: productId,
        supabase_user_id: userId,
        product_name: product.nombre,
        stock_product: product.stock
    });
    return productAdded
};

export const deleteProductWishlist = async ({userId, wishlistId}) =>{
   
    const deleted = await Wishlist.findOneAndDelete({
        _id: wishlistId,
        supabase_user_id: userId,
    });
    if(!deleted){
        const error = new Error ("El producto no estaba en tu lista de deseos")
        error.statusCode = 404;
        throw error
    };
    return deleted
};
