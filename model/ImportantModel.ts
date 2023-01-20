import mongoose from "mongoose";
import { taskData2 } from "./TaskData";

interface Important extends taskData2, mongoose.Document {}

const ImportantSchema = new mongoose.Schema({
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

const importantModel = mongoose.model<Important>("Tasks", ImportantSchema);

export default importantModel;
