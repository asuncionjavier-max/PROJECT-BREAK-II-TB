import app from "./app.js"
import { dbConnect } from "./src/config/database.js"
import  config from "./src/misc/constant.js"


try {
        await dbConnect()
        app.listen(config.PORT, () =>{
                console.log(`> Servidor funcionando en puerto: ${config.PORT} `)
        })

} catch (error) {
        console.error(">Error al conectar con mongodb", error.message)
        process.exit(1)
}