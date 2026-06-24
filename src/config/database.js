import config from "../misc/constant.js"
import mongoose from "mongoose" 

export const dbConnect = async () =>{
    try {
        await mongoose.connect(config.MONGODB_URI)
        console.log("> db connect success")
    } catch (error) {
        console.error(">error to connect", error.message)
        
    }
}