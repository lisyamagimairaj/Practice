import { model, Schema } from "mongoose";
const StudentDetailSchema = new Schema({
  studentId: String,
  department: String,
  Year: String,
});

export const Student = model("Student", StudentDetailSchema);
