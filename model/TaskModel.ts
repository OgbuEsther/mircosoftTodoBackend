import mongoose from "mongoose";
import { taskData2 } from "./TaskData";

interface iTaskModel extends taskData2, mongoose.Document {}

const TaskSchema = new mongoose.Schema({
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

  // day: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "UserModel",
  // },
});

const taskModel = mongoose.model<iTaskModel>("Tasks", TaskSchema);

export default taskModel;
