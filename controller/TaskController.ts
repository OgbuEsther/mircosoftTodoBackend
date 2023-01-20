import { Request, Response } from "express";
import mongoose from "mongoose";

import taskModel from "../model/TaskModel";

import userModel from "../model/UserModel";

const getTask = async (req: Request, res: Response): Promise<Response> => {
  try {
    const getAllTask = await userModel.findById(req.params.userID).populate([
      {
        path: "task",
      },
      // {
      //   path: "important",
      // },
      // {
      //   path: "assigned",
      // },
      // {
      //   path: "planned",
      // },
    ]);
    // const getAllTask = await taskModel.find();

    return res.status(200).json({
      message: "gotten all task",
      data: getAllTask,
    });
  } catch (error) {
    return res.status(400).json({
      message: "an error",
      data: error,
    });
  }
};

//single get

const getOneTask = async (req: Request, res: Response): Promise<Response> => {
  try {
    const getOne = await taskModel.findById(req.params.taskID);
    return res.status(200).json({
      message: "single task gotten",
      data: getOne,
    });
  } catch (error) {
    return res.status(400).json({
      message: "failed to get single task",
      data: error,
    });
  }
};

const createTask = async (req: Request, res: Response): Promise<Response> => {
  try {
    const getUser = await userModel.findById(req.params.userId);

    if (getUser) {
      const { title, date } = req.body;
      let myDate = new Date().toDateString();

      const creatingtask = await taskModel.create({
        title,
        date: date ? date : myDate,
        reminder: "",
        status: false,
        note: "",
      });

      await getUser?.myDay.push(new mongoose.Types.ObjectId(creatingtask!._id));
      await getUser?.task.push(new mongoose.Types.ObjectId(creatingtask!._id));
      getUser.save();

      return res.status(200).json({
        message: "success",
        data: creatingtask,
      });
    } else {
      return res.status(404).json({
        message: "user not found",
      });
    }
  } catch (error) {
    return res.status(400).json({
      message: "an error occurred while creating task",
    });
  }
};

//update method

const updateTask = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { title, reminder, status, note, date } = req.body;
    const updating = await taskModel.findByIdAndUpdate(
      req.params.taskID,
      { title, reminder, status, note, date },
      { new: true }
    );

    return res.status(200).json({
      message: "update successfully",
      data: updating,
    });
  } catch (error) {
    return res.status(400).json({
      message: "an error occurred while creating task",
    });
  }
};

//delete method

const removetask = async (req: Request, res: Response): Promise<Response> => {
  try {
    const getID = await userModel.findById(req.params.userId);
    const removing = await taskModel.findById(req.params.taskID);

    await getID?.task.pull(new mongoose.Types.ObjectId(removing!._id));
    await getID?.myDay.pull(new mongoose.Types.ObjectId(removing!._id));

    return res.status(200).json({
      message: "deleted successfully",
      data: removing,
    });
  } catch (error) {
    return res.status(400).json({
      message: "an error occurred while creating task",
    });
  }
};

export { getTask, createTask, getOneTask, updateTask, removetask };
