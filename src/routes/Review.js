import express from "express";
import * as reviewController from "../controllers/Reviews.js"
import { authMiddleware } from "../middlewares/auth.js";

const router = express.Router()

router.get("/reviews", authMiddleware,reviewController.allReviews)
router.post("/products/:id/reviews", authMiddleware, reviewController.newReview)
router.patch("/reviews/:reviewId", authMiddleware, reviewController.updateReview)
router.delete("/reviews/:reviewId", authMiddleware, reviewController.deleteReview)

export default router;