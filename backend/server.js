import express, { json } from "express";
import cors from "cors";
import { connect, model, Schema } from "mongoose";

const app = express();
app.use(cors());
app.use(json()); //read json from fornt


//this is mongo connecting
connect("mongodb://127.0.0.1:27017/practiceDb")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

  //defining the model
const Messege = model(
  "Messege",
  new Schema({
    text: String,
  })
);
//route creating

app.post("/save", async (req, res) => {
  const msg = new Messege({ text: req.body.text });
  await msg.save();
  res.json({ status: "saved the name",text });
});
app.listen(5000, () => console.log("backend running on port 5k"));
