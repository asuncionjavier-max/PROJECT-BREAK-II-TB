import { Review } from "../config/modelReview.js";
import prisma from "../lib/prisma.js"


export const userReviews = async (userId) =>{

    const allReviews = await Review.find({
        supabase_user_id: userId
    });
    return allReviews
}
export const newReview = async ({userId, productId, rating , comment}) =>{
    
    const product = await prisma.products.findUnique({
        where: { id: productId },
        select: {nombre: true},

    });

    if(!product) {
        const error = new Error ("el producto que buscas no existe");
        error.statusCode = 404;
        throw error  
    }

    const user = await prisma.users.findUnique({
        where: {id: userId},
        select: {nombre: true},
    })

    const review = await Review.create({
        supabase_user_id: userId,
        user_name: user.nombre,
        supabase_product_id: productId,
        product_name: product.nombre,
        rating,
        comment
    });
    return review
};
export const updateReview = async ({userId,reviewId, comment, rating}) =>{
    const updated = await Review.findOneAndUpdate(
        {supabase_user_id: userId, _id: reviewId,},
        {rating, comment},
        {returnDocument:'after'},
    );
    if(!updated) {
        const Error = new error ("no se encontro la review o no tienes permiso para modificarla")
        error.statusCode = 500;
        throw error;
    };

    return updated
}
export const deleteReview = async ({userId, reviewId}) =>{
    const deleted = await Review.findOneAndDelete({
        supabase_user_id: userId,
        _id: reviewId
    })

    if(!deleted){
        const error = new Error ("La review no se encontro")
        error.statusCode = 404;
        throw error;
    }
    return deleted
};