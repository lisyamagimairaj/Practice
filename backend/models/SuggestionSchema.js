import { model, Schema } from "mongoose";

const suggestionSchema = new Schema({
  subcategory: String,
  suggestion: String,
});
export const Suggestion = model("Suggestion",suggestionSchema);

