import { Router } from "express";
import userController from "../../controller/user/index.js";

const userRouter = Router();

userRouter.post('/user', userController.create)
userRouter.put("/user/:userId", userController.update)
userRouter.post("/user/follow", userController.follow);

export default userRouter;