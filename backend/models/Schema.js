import { model, Schema } from "mongoose";

const ContactNameSchema = new Schema({
  name: String,
  Feedback: String,
});

export const Contact = model("Contact", ContactNameSchema);
