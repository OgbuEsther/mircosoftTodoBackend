import userModel from "../model/UserModel";
import { Request, Response } from "express";

//general get
const GetAllUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const getAll = await userModel.find();

    return res.status(200).json({
      message: " all data gotten ",
      data: getAll,
    });
  } catch (error) {
    return res.status(400).json({
      message: "failed to get all users",
      data: error,
    });
  }
};

//single get

const GetOneUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const getOne = await userModel.findById(req.params.userId);

    return res.status(200).json({
      message: "gotten one user",
      data: getOne,
    });
  } catch (error) {
    return res.status(400).json({
      message: "failed to get one user",
      data: error,
    });
  }
};

//post method

const newUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { name, email, password } = req.body;
    const searching = await userModel.findOne({ email });

    if (searching) {
      return res.status(400).json({
        message: "user with this email already exist",
      });
    } else {
      const regUser = await userModel.create({
        name,
        email,
        password,
      });
      return res.status(201).json({
        message: "user created ",
        data: regUser,
      });
    }
  } catch (error) {
    return res.status(400).json({
      message: "failed to create new user",
      data: error,
    });
  }
};

export { GetAllUser, newUser, GetOneUser };
