import { Router } from "express";
import commentController from "../../controller/comment/index.js";

const commentRouter = Router();

commentRouter.post("/comment", commentController.create)
commentRouter.get("/comment", commentController.get)
commentRouter.put("/comment/:commentId", commentController.update)

export default commentRouter;