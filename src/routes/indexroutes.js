import { Router } from "express";

const router = Router();

router.get("/health", (req,res) =>{
    res.status(200).send("la ruta funciona")
});

export default router;