import { Router } from "express";
import { createPlan } from "../controller/PlannedController";
import {
  createImportant,
  getImportant,
  getOneImportant,
} from "../controller/importantController";

const importantRouter = Router();
//create task
importantRouter.route("/newimportant/:userId").post(createImportant);
//get all of all important task
importantRouter.route("/getall").get(getImportant);
//get all of one user
importantRouter.route("/getall/:userID").get(getImportant);
//get one
importantRouter.route("/getone/:taskID").get(getOneImportant);
export default importantRouter;
