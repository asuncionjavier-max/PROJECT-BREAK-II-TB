import * as productService from "../services/products.js"

export const allProducts = async (req,res,next) => {
    try {
        const data =  await productService.getAllProducts()
        res.status(200).json({
            success:true,
            data: data
        })
        
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
            const product = await productService.getProductById(id);
            if(!product){
                const error = new Error("el producto que buscas no existe")
                error.statusCode = 404
                return next(error)
            }
        res.status(200).json({
            success:true,
            data: product
        })
    } catch (error) {
        next(error)
    }
}

export const createProduct = async(req,res,next) =>{
    try {
        const {nombre, precio, stock} = req.body
    
        const newProduct = await productService.createProduct({nombre, precio, stock});

        res.status(201).json({
            success:true,
            data: newProduct
        })
        
    } catch (error) {
        next(error)
    }
}

export const updateProduct = async (req,res,next) =>{
    try {
        const id = parseInt(req.params.id)
        if(isNaN(id)){
            const error = new Error ("El id tiene que ser un numero ")
            error.statusCode = 400
            return next(error)
        } 

        const {nombre, precio, stock} = req.body
        const update = await productService.updateProduct(id, {nombre, precio,stock });

        res.status(200).json({
            success: true,
            data: update
        })
    } catch (error) {
        if (error.code === 'P2025') {
            error.statusCode = 404;
            error.message = "el producto que intentas actualizar no existe";
        }
        next(error);
    }
}

export const deleteProduct = async (req,res,next) =>{
    try {
           const id = parseInt(req.params.id)
        if(isNaN(id)){
            const error = new Error ("El id tiene que ser un numero ")
            error.statusCode = 400
            return next(error)
        } 

        const productExist = await productService.getProductById(id)
        if(!productExist){
            const error = new Error ("el id no existe")
            error.statusCode = 404;
            return next(error)
        }

        const deleted = await productService.deleteProduct(id)
        
        res.status(200).json({
            success:true,
            data: deleted
        })
        
    } catch (error) {
        if (error.code === 'P2025') {
            error.statusCode = 404;
            error.message = "el producto que intentas borrar no existe";
        }
        next(error);
    }
};