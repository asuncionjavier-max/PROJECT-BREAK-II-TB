import express from "express";
import products from "./products.js";
import auth from "./auth.js";
import Review  from "./Review.js";
import wishlist from "./wishlist.js";
import cart from "./cart.js";
const router = express.Router();

router.get("/health", (req,res) =>{
    res.status(200).send("la ruta funciona")
});

router.use(products);

router.use(auth)

router.use(cart)
router.use(Review)

router.use(wishlist)

export default router;