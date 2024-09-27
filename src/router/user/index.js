import { Router } from "express";
import userController from "../../controller/user/index.js";
import authMiddleware from "../../middlewares/authentication.js";

const userRouter = Router();

userRouter.get('/user', userController.getAll)
userRouter.get('/user/:userId', userController.getOne)
userRouter.put("/user/:userId", userController.update)
userRouter.post("/user/follow", userController.follow);

export default userRouter;