import { Router } from "express";
import * as productControllers from "../controllers/products.js"

const router = Router();

router.get("/products", productControllers.allProducts);

router.get ("/products/:id", productControllers.getProductById);


export default router