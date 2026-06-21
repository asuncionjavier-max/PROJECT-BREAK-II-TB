import prisma from "../lib/prisma.js"


export const getAllProducts = async () => {
    return await prisma.products.findMany({
        orderBy: {id: "asc"}
    })
};

export const getProductById = async (id) => {
    return await prisma.products.findUnique({
        where:{id}
    }) 
};

export const createProduct = async (data) =>{
    const newproduct = await prisma.products.create({data})

    return newproduct
}

export const updateProduct = async (id, data) =>{
 
    return await prisma.products.update({
        where: {id},
        data
    })

}

export const deleteProduct = async (id) =>{
    return await prisma.products.delete({
        where:{id}
    })
}