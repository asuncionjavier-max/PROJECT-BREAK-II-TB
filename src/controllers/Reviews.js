import * as reviewService from "../services/Review.js";

export const allReviews = async(req,res,next) =>{
    try {
        const userId = req.user.id;
    
        const userReviews = await reviewService.userReviews({userId})
    
        res.status(200).json({
            success:true,
            data: userReviews
        })
        
    } catch (error) {
        next(error)
    }

}

export const newReview = async (req, res, next) => {
    try {
        const userId = req.user.id;

        const productId = parseInt(req.params.id)
        
        const { rating, comment} = req.body;

        if(isNaN(productId)){
            const error = new Error("el id debe de ser un numero valido")
            error.statusCode = 400
            return next(error)
        }
        if(!rating){
            const error = new Error ("introduce puntuacion")
            error.statusCode = 400;
            return next(error)
        }
        const review = await reviewService.newReview({
            userId,
            productId,
            rating: parseInt(rating),
            comment
        });

        res.status(201).json({
            success: true,
            data: review
        });
        
    } catch (error) {
        next(error)
    }

}
export const updateReview = async (req,res,next) =>{
    try {
        const userId = req.user.id;
        const {reviewId} = req.params;
        const {rating, comment} = req.body;

    const updated = await reviewService.updateReview({userId, reviewId, comment, rating})

    res.status(200).json({
        success: true,
        data: updated
    })
    } catch (error) {
        next(error)
    }

}
export const deleteReview = async (req,res,next) =>{
 try {
     const userId = req.user.id;
     const {reviewId} = req.params;
    
     const data = await reviewService.deleteReview({userId, reviewId})
 
     res.status(200).json({
        success: true,
        message: "review borrada",
        data: data
     });
    } catch (error) {
    next(error)
 }

};