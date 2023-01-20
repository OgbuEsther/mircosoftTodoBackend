import { Router } from "express";
import {
  createTask,
  getTask,
  getOneTask,
  updateTask,
  removetask,
} from "../controller/TaskController";

const taskRouter = Router();

taskRouter.route("/newtask/:userId").post(createTask);
taskRouter.route("/getalltask/:userId").get(getTask);
// taskRouter.route("/getonetask/:userId/:taskID").get(getOneTask);
taskRouter.route("/getonetask/:taskID").get(getOneTask);
taskRouter.route("/updatetask/:taskID").patch(updateTask);
// taskRouter.route("/removetask/:taskID").delete(removetask);
taskRouter.route("/removetask/:userId/:taskID").delete(removetask);

export default taskRouter;
