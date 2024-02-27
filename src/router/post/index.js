import { Router } from "express";
import postController from "../../controller/post/index.js";
import postValidator from "../../validator/post/index.js";
const postRouter = Router();

postRouter.post("/post", postValidator.create, postController.create)
postRouter.get("/post", postController.get)
postRouter.put("/post/:postId", postController.update)

export default postRouter;