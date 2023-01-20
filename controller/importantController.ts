import { Request, Response } from "express";
import mongoose from "mongoose";

import PlannedModel from "../model/PlannedModel";
import taskModel from "../model/TaskModel";
import userModel from "../model/UserModel";
import importantModel from "../model/ImportantModel";

//post
const createImportant = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const getUserId = await userModel.findById(req.params.userId);
    let myDate = new Date().toDateString();
    if (getUserId) {
      const { title, date } = req.body;
      const createPlannedTask = await taskModel.create({
        title,
        date: date ? date : myDate,
        reminder: "",
        status: false,
        note: "",
      });

      await getUserId.important.push(
        new mongoose.Types.ObjectId(createPlannedTask!._id)
      );
      await getUserId.task.push(
        new mongoose.Types.ObjectId(createPlannedTask!._id)
      );

      getUserId.save();

      return res.status(200).json({
        message: "new planned task created",
        data: createPlannedTask,
      });
    } else {
      return res.status(404).json({
        message: "user not found",
      });
    }
  } catch (error) {
    return res.status(400).json({
      message: "an error occurred while trying to create important tasks",
      data: error,
    });
  }
};

//get all

const getImportant = async (req: Request, res: Response): Promise<Response> => {
  try {
    const getUser = await userModel.findById(req.params.userID).populate([
      // {
      //   path: "task",
      // },
      {
        path: "important",
      },
      // {
      //   path: "assigned",
      // },
      // {
      //   path: "planned",
      // },
    ]);
    // const getAll = await taskModel.find();

    return res.status(200).json({
      message: "gotten all important tasks successfully",
      data: getUser,
    });
  } catch (error) {
    return res.status(400).json({
      message: "an error occurred while trying to get important tasks",
      data: error,
    });
  }
};

//get one important task

const getOneImportant = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const getOne = await taskModel.findById(req.params.taskID);

    return res.status(200).json({
      message: "gotten a single important task",
      data: getOne,
    });
  } catch (error) {
    return res.status(400).json({
      message: "an error occurred while trying to get important tasks",
      data: error,
    });
  }
};

//update method

export { createImportant, getImportant, getOneImportant };
