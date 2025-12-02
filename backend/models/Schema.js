import { model, Schema } from "mongoose";

//defining the model
// const StudentSchema  = model(
//   "Student",
//   new Schema({
//      StudentID:String,
//      department:String,
//      year:String,
//   })
// );

const ContactNameSchema = new Schema({
  name: String,
  Feedback: String,
});

export const Contact = model("Contact", ContactNameSchema);

// const Student = model("Student",StudentSchema);

// export default Student;
