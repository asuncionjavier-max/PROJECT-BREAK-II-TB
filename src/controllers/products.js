import * as productController from "../services/products.js"
import { errorHandler } from "../middlewares/errorhandler.js"

export const allProducts = async (req,res,next) => {
    try {
        return await productController.getAllProducts 
        
    } catch (error) {
    next(error)
        
    }
}

export const getProductById = async (req,res, next) =>{
    try {
        const id = parseInt(req.params.id)

        if(isNaN(id)){
            const error = new Error("el id tiene que ser un numero")
            error.statusCode = 400
            return next (error)
        }
        res.status(200).json({
            ok:true,
            message: _
        })
    } catch (error) {
        next(error)
    }
}