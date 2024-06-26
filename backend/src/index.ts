import express, {Request, Response} from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() => {console.log("Connected to database!")});

const app = express();
app.use(express.json());
app.use(cors())

app.get("/text", async (req: Request, res: Response) => {
  res.json({message: "hello!"});
});

app.listen(7000, () => {
  console.log('Server started at port: 7000');
});