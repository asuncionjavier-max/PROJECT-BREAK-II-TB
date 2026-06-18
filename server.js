import app from "./app.js"
import  config from "./src/misc/constant.js"

app.listen(config.PORT, () =>{
        console.log(`Servidor funcionando en puerto: ${config.PORT} `)
})