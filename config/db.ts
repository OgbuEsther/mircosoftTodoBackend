import mongoose from "mongoose";

const URI = "mongodb://0.0.0.0:27017/MicroSoftToDo";

mongoose.connect(URI);

mongoose.connection
  .on("open", () => {
    console.log(`database connected`);
  })
  .once("error", () => {
    console.log(`failed to connect to database`);
  });
