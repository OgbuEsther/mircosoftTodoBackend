import mongoose from "mongoose";

export type taskData = {
  title: string;
  date: string;
  reminder: string;
  note: string;
  //   day: {
  //     type: mongoose.Schema.Types.ObjectId;
  //     ref: "users";
  //     };
  status: boolean;
};
export interface taskData2 {
  title: string;
  date: string;
  reminder: string;
  note: string;

  status: boolean;
}
