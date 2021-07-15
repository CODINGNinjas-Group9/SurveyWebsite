import mongoose from "mongoose";
const Schema = mongoose.Schema; // alias for the mongoose schema

const SurveyResponseSchema = new Schema(
  {
    surveyId: String,
    name: String,
    q1ResNo: Number,
    q2ResNo: Number,
    q3ResNo: Number,
    q4ResNo: Number,
    q5ResNo: Number,
  },
  {
    collection: "response",
  }
);

const Model = mongoose.model("Response", SurveyResponseSchema);
export default Model;
