import 'dotenv/config'
import Express, { json } from "express";
import { connectDB } from "./db/config.js";
import dbInit from "./db/init.js";
import allRouter from "./router/index.js";
const app = Express();
app.use(json())
connectDB();
dbInit();
app.use(allRouter);
app.listen(5000, ()=> {console.log("Server is running on port 5000")})