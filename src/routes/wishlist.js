import express from "express";
import * as wishlistController from "../controllers/Wishlist.js"
import { authMiddleware } from "../middlewares/auth.js";
const router = express.Router()


router.get("/wishlist", authMiddleware, wishlistController.getWishlist)

router.post("/products/:id/wishlist",authMiddleware, wishlistController.addWishlist)

router.delete("/wishlist/:wishlistId", authMiddleware, wishlistController.deleteProductWishlist)

export default router