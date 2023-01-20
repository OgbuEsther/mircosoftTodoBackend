import { Router } from "express";
import { GetAllUser, GetOneUser, newUser } from "../controller/UserController";

const userRouter = Router();

userRouter.route("/getallusers").get(GetAllUser);
userRouter.route("/getoneuser/:userId").get(GetOneUser);
userRouter.route("/newuser").post(newUser);

export default userRouter;
