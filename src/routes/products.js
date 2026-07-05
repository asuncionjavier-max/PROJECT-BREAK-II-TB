import { Router } from "express";
import * as productControllers from "../controllers/products.js"
import { authMiddleware } from "../middlewares/auth.js";
import { requireRole } from "../middlewares/requireRole.js";

const router = Router();

router.get("/products", productControllers.allProducts);

router.get ("/products/:id", productControllers.getProductById);

router.post("/products", authMiddleware, requireRole("admin"), productControllers.createProduct);

router.patch("/products/:id", authMiddleware, requireRole("admin"), productControllers.updateProduct);

router.delete("/products/:id", authMiddleware, requireRole("admin"), productControllers.deleteProduct);

export default router