import express from "express";
import indexRoutes from "./src/routes/indexroutes.js";
import { errorHandler } from "./src/middlewares/errorhandler.js";
const app = express();

app.use(express.json());

app.use(indexRoutes);

app.use(errorHandler);

export default app