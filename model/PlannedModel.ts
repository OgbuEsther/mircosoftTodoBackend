import mongoose from "mongoose";
import { taskData2 } from "./TaskData";

interface IPlannedModel extends taskData2, mongoose.Document {}

const plannedSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
  },
  reminder: {
    type: String,
  },
  note: {
    type: String,
  },
  status: {
    type: Boolean,
  },
});

const PlannedModel = mongoose.model<IPlannedModel>("Tasks", plannedSchema);

export default PlannedModel;
