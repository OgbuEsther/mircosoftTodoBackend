import { Router } from "express";
import {
  createPlan,
  getOnePlanned,
  getPlanned,
} from "../controller/PlannedController";

const plannedRouter = Router();

plannedRouter.route("/newplan/:userId").post(createPlan);
plannedRouter.route("/getallplans/:userID").get(getPlanned);
plannedRouter.route("/getoneplan/:taskID").get(getOnePlanned);

export default plannedRouter;
