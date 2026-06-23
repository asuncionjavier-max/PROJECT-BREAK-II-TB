import { errorHandler } from "../middlewares/errorhandler.js";
import * as authService from "../services/auth.js"

const cookieOptions = {
             httpOnly: true,
             secure: process.env.NODE_ENV === "production",
             maxAge: 1 * 60 * 60 * 1000 
            }

export const register = async (req,res,next) =>{
    try {
        const {nombre, email, password} = req.body
        
        if(!nombre || !email || !password){
            const error = new Error ("porfavor rellena los campos")
            error.statusCode = 400
            return next(error)
        }

        const result = await authService.newUser ({nombre, email, password});

       const {password:_, ...userWithoutpass} = result 

        res.status(201).json({
            success: true,
            data: userWithoutpass

        });

    } catch (error) {
        next(error)
    }

}

export const login = async (req,res,next) =>{
    try {
        const {email, password} = req.body;
        if(!email || !password){
            const error = new Error("porfavor rellena los campos")
            error.statusCode = 400
            return next (error);
        }
        const token = await authService.loginUser({email, password})

        res.cookie("token", token, cookieOptions)
            res.status(200).json({
            success: true,
            data: "login success"
        })
    
    } catch (error) {
      return next(error)
    }

}

export const logout = (req,res) =>{
        res.clearCookie("token")
        res.json({
            success: true,
            message: "session cerrada",

        })
    }
export const deleteUser = async (req,res,next) =>{
    try {
        const {email, password} = req.body
        if(!email || !password){
            const error = new Error("porfavor rellena los campos")
            error.statusCode = 400
            return next (error);
        }
        const deleted = await authService.deleteUser({email,password});

        const {password: _, ...userWithoutpass} = deleted
        res.status(200).json({
            success: true,
            data:userWithoutpass
        })
    } catch (error) {
        next(error)
    }
}
export const getProfile =(req,res) => {
        res.json({
            success: true,
            data:{
                id: req.user.id,
                email: req.user.email,
                role: req.user.role,
            }
        })
    }

export const getAdmin = (req,res) =>{
        res.json({
            success:true,
            message: `Bienvenido al panel de admin ${req.user.email}`

        })
    }