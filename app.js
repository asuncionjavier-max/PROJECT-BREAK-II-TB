import express from "express";
import indexRoutes from "./src/routes/indexroutes.js";
import { errorHandler } from "./src/middlewares/errorhandler.js";
import cookieParser from "cookie-parser";
const app = express();

app.use(express.json());
app.use(cookieParser())
app.use(indexRoutes);

app.use(errorHandler);

export default app