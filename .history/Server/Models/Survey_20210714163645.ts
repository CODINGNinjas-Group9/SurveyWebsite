import mongoose from "mongoose";
const Schema = mongoose.Schema; // alias for the mongoose schema

const SurveySchema = new Schema(
  {
    title: String,
    creator: String,
    questions: {
      q1: {
        questionNo: {
          type: Number,
          default: 1,
        },
        question: String,
        resOptions: {
          opt1: {
            optNo: { type: Number, default: 1 },
            optString: { String, default: "Strongly Agree" },
          },
          opt2: {
            optNo: { type: Number, default: 1 },
            optString: { String, default: "Slightly Agree" },
          },
          opt3: {
            optNo: { type: Number, default: 1 },
            optString: { String, default: "Neutral" },
          },
          opt4: {
            optNo: { type: Number, default: 1 },
            optString: { String, default: "Strongly Disagree" },
          },
          opt5: {
            optNo: { type: Number, default: 1 },
            optString: { String, default: "Slightly Disagree" },
          },
        },
      },
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
