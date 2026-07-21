import express from "express";
import cors from "cors"
import indexRoutes from "./src/routes/indexroutes.js";
import { errorHandler } from "./src/middlewares/errorhandler.js";
import cookieParser from "cookie-parser";
import swaggerUi from "swagger-ui-express"
import fs from "node:fs"
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
const app = express();
app.use(cors());

app.use(express.json());
app.use(cookieParser());

const __dirname = dirname(fileURLToPath(import.meta.url))

const swaggerDocument = JSON.parse(
    fs.readFileSync(join(__dirname, "./swagger.json"),"utf8"),
)

app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use("/api", indexRoutes);

app.use(errorHandler);

export default app