
export const isNumber = (value)=>{
    const num = Number(value)
    if(Number.isNaN(num)) {
         const error = new Error ("El valor debe ser un numero valido")
         error.statusCode = 400;
         throw error; 
    } 
    return num
}