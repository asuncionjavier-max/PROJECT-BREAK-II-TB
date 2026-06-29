import { Router } from "express";
import * as productControllers from "../controllers/products.js"

const router = Router();

router.get("/products", productControllers.allProducts);

router.get ("/products/:id", productControllers.getProductById);

router.post("/products", productControllers.createProduct);

router.patch ("/products/:id", productControllers.updateProduct)

router.delete("/products/:id", productControllers.deleteProduct);
export default router