import prisma from "../lib/prisma.js"
import { crypt, compare } from "../utils/pass.js"
import { isString } from "../utils/isString.js";
import jwt from "jsonwebtoken";
import config from "../misc/constant.js"

export const newUser = async ({nombre, email, password,}) =>{
        const hashedPassword = await crypt(isString(password));

        return await prisma.users.create({
            data: {nombre, email, password: hashedPassword }
        });
    
}

export const loginUser = async ({email, password}) =>{
    const user =  await prisma.users.findUnique({
        where: { email },

        select: { id: true, nombre: true, email: true, password: true, role: true} 
    })

    if(!user || !(await compare(isString(password), user.password))){
         const error = new Error (">Email o Contraseña no son validos")
         error.statusCode = 401;
         throw error
    }

    const token = jwt.sign(
        {
         id: user.id,
        email: user.email,
        role: user.role
        },
        config.SECRET,
        { expiresIn:"1h" },
    )

    return token
};

export const deleteUser = async ({email, password}) =>{
    const user =  await prisma.users.findUnique({
        where:{email},
        select: {id: true, password: true}
    })
    if(!user || !(await compare(isString(password), user.password))){
        const error = new Error ("Email o contraseña incorrecto")
        error.statusCode = 401
        throw error
    }
    return await prisma.users.delete({
        where: {id: user.id}
    })
}