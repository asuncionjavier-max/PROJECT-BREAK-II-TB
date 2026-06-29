import * as wishlistService from "../services/Wishlist.js"

export const getWishlist = async (req,res,next) =>{
  try {
      const userId = req.user.id
      const getlist = await wishlistService.getWishlist({userId})
  
      res.status(200).json({
          success: true,
          data: getlist
      });
    
  } catch (error) {
    next(error)
  }
};

export const addWishlist = async (req,res,next) =>{
    try {
        const userId = req.user.id
        const productId = parseInt(req.params.id)
        if(isNaN(productId)) {
            const error = new Error ("el id debe ser un numero")
            error.statusCode = 400;
            next(error)
        }
        const productAdded = await wishlistService.addProductWishlist({productId,userId})
    
        res.status(201).json({
            success: true,
            data: productAdded
    });    
    } catch (error) {
       next(error) 
    }
    
};

export const deleteProductWishlist = async (req,res,next) =>{
    try {
    const userId = req.user.id
    const {wishlistId} = req.params

    const wishlistDeleted = await wishlistService.deleteProductWishlist({userId, wishlistId})
    res.status(200).json({
        success: true,
        data: wishlistDeleted
    })
    } catch (error) {
     next(error)   
    }
} 