import mongoose, { mongo } from "mongoose";
import { taskData } from "./TaskData";

interface UserData {
  name: string;
  email: string;
  password: string;
  myDay: any | taskData[];
  important: any | taskData[];
  planned: any | taskData[];
  assigned: any | taskData[];
  task: any | taskData[];
}

interface iUserData extends UserData, mongoose.Document {}

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  myDay: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tasks",
    },
  ],
  important: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tasks",
    },
  ],
  planned: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tasks",
    },
  ],
  assigned: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tasks",
    },
  ],
  task: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tasks",
    },
  ],
});

const userModel = mongoose.model<iUserData>("UserModel", UserSchema);

export default userModel;
