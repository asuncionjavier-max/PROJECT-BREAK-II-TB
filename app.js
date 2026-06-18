import express from "express";
import indexRoutes from "./src/routes/indexroutes.js";

const app = express();

app.use(express.json());

app.use(indexRoutes);

export default app