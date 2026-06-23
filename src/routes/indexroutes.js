import express from "express";
import products from "./products.js"
import auth from "./auth.js"
const router = express.Router();

router.get("/health", (req,res) =>{
    res.status(200).send("la ruta funciona")
});

router.use(products);

router.use(auth)

export default router;