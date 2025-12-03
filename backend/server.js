import express, { json } from "express";
import cors from "cors";
import mongoose from "mongoose";
import router from "./routes/router.js";

const app = express();

app.use(cors());
app.use(express.json()); //read json from fornt

mongoose
  .connect("mongodb://127.0.0.1:27017/practiceDb")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use("/Contact", router);
app.use("/StudentDetailPage", router);
app.use("/Category", router);

app.listen(5000, () => console.log("backend running on port 5000"));
