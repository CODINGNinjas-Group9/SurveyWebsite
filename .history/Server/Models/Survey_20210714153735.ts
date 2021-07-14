import mongoose from "mongoose";
const Schema = mongoose.Schema; // alias for the mongoose schema

const SurveySchema = new Schema(
  {
    title: String,
    creator: String,
    questions: {
      q1: String,
      q2: String,
      q3: String,
      q4: String,
      q5: String,
    },
  },
  {
    collection: "survey",
  }
);

const Model = mongoose.model("Survey", SurveySchema);
export default Model;
