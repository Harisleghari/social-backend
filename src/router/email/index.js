import { Router } from "express";
import { main } from "../../utils/email/index.js";
const mailRouter = Router();

mailRouter.get("/email", main)

export default mailRouter;