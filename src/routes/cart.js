import express from "express";
import * as cartController from "../controllers/cart.js";
import { authMiddleware } from "../middlewares/auth.js";
const router = express.Router()

router.get("/cart", authMiddleware, cartController.showCart);

router.post("/cart/items", authMiddleware, cartController.addItemToCart);

router.patch("/cart/items/:itemId", authMiddleware, cartController.updateCartItemQuantity);

router.delete("/cart/items/:itemId", authMiddleware, cartController.removeCartItem);

router.delete("/cart", authMiddleware, cartController.clearCart);

router.post("/cart/checkout", authMiddleware,cartController.checkoutCart);

export default router;