import jwt from "jsonwebtoken";
import  config  from "../misc/constant.js";

export const authMiddleware = (req,res,next) =>{
    let token = req.cookies.token

    if(!token) {
        const authHeader = req.headers.authorization 
        if(authHeader?.startsWith('Bearer ')){
            token = authHeader.split(' ')[1]
        }
    }
    if(!token){
        return res.status(401).json({
            success: false,
            error: "no autenticado",
        })
    }
    try {
        const decoded = jwt.verify(token, config.SECRET)

        req.user = decoded
        next()
    } catch (error) {
        res.clearCookie("token")
        res.status(401).json({
            success: false,
            error: "sesion invalida o expirada",
        })
    }
}