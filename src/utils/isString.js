
export const isString = (value) =>{

if(typeof value === "string") return value;
return JSON.stringify(value)

};