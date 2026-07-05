import * as cartService from '../services/cart.js';
import { isNumber } from '../utils/isNumber.js';

export const showCart = async (req, res, next) =>{
    try {
        const cart = await cartService.getCart(req.user.id);
        res.status(200).json({
            success: true,
            data: cart
        });
        
    } catch (error) {
        next(error)
    }
};

export const addItemToCart = async (req,res,next) =>{
    try {
        const {productId, cantidad} = req.body
        
        const item = await cartService.addItemToCart(
            req.user.id,
             isNumber(productId),
            cantidad !== undefined ? isNumber(cantidad): 1
        );

        res.status(201).json({
            success:true,
            data: item
        });
        
    } catch (error) {
        next(error);
    }
};

export const updateCartItemQuantity = async (req,res,next) =>{
    try {
        const {itemId} = req.params;
        const {cantidad} = req.body;

        const item = await cartService.updateCartItemQuantity(
            req.user.id,
            isNumber(itemId),
            isNumber(cantidad)
        );
        res.status(201).json({
            success: true,
            data: item
        });
    } catch (error) {
        next(error);       
    }
};

export const removeCartItem = async (req,res,next) =>{
try {
    const {itemId} = req.params;

    await cartService.removeCartItem(
        req.user.id,
        isNumber(itemId)
    );
res.status(200).json({
    success:true,
    data: "Item eleminado"
    });
} catch (error) {
   next(error); 
}
};

export const clearCart = async (req,res,next) =>{
    try {
        await cartService.clearCart(req.user.id);
        res.status(200).json({
            success: true,
            data: "Carrito vacio"
        });
    } catch (error) {
        next(error);
    }
};

export const checkoutCart = async (req,res,next) => {
    try {
        const cart = await cartService.checkoutCart(req.user.id);

        res.status(200).json({
            success: true,
            data: cart
        });
        
    } catch (error) {
        next(error);
    }
};