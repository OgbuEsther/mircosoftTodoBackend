import express, { Application, Request, Response } from "express";
import cors from "cors";
require("./config/db");
import userRouter from "./router/UserRouter";
import taskRouter from "./router/TaskRouter";
import plannedRouter from "./router/plannedRouter";
import importantRouter from "./router/importantRouter";

const port: number = 2005;

const server: Application = express();
server.use(cors());
server.use(express.json());

server.get("/", (req: Request, res: Response): Response => {
  return res.status(200).json({
    message: "Server is up and running",
  });
});

server.use("/todo", userRouter);
server.use("/task", taskRouter);
server.use("/planned", plannedRouter);
server.use("/important", importantRouter);

server.listen(port, () => {
  console.log(`server is up on port : ${port}`);
});
