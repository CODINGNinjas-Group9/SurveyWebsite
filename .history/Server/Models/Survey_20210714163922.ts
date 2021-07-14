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
        questionText: String,
        resOptions: {
          opt1: {
            optNo: { type: Number, default: 1 },
            optText: { String, default: "Strongly Agree" },
          },
          opt2: {
            optNo: { type: Number, default: 1 },
            optText: { String, default: "Slightly Agree" },
          },
          opt3: {
            optNo: { type: Number, default: 1 },
            optText: { String, default: "Neutral" },
          },
          opt4: {
            optNo: { type: Number, default: 1 },
            optText: { String, default: "Strongly Disagree" },
          },
          opt5: {
            optNo: { type: Number, default: 1 },
            optText: { String, default: "Slightly Disagree" },
          },
        },
      },
      q2: {
        questionNo: {
          type: Number,
          default: 1,
        },
        questionText: String,
        resOptions: {
          opt1: {
            optNo: { type: Number, default: 1 },
            optText: { String, default: "Strongly Agree" },
          },
          opt2: {
            optNo: { type: Number, default: 1 },
            optText: { String, default: "Slightly Agree" },
          },
          opt3: {
            optNo: { type: Number, default: 1 },
            optText: { String, default: "Neutral" },
          },
          opt4: {
            optNo: { type: Number, default: 1 },
            optText: { String, default: "Strongly Disagree" },
          },
          opt5: {
            optNo: { type: Number, default: 1 },
            optText: { String, default: "Slightly Disagree" },
          },
        },
      },
      q3: {
        questionNo: {
          type: Number,
          default: 1,
        },
        questionText: String,
        resOptions: {
          opt1: {
            optNo: { type: Number, default: 1 },
            optText: { String, default: "Strongly Agree" },
          },
          opt2: {
            optNo: { type: Number, default: 1 },
            optText: { String, default: "Slightly Agree" },
          },
          opt3: {
            optNo: { type: Number, default: 1 },
            optText: { String, default: "Neutral" },
          },
          opt4: {
            optNo: { type: Number, default: 1 },
            optText: { String, default: "Strongly Disagree" },
          },
          opt5: {
            optNo: { type: Number, default: 1 },
            optText: { String, default: "Slightly Disagree" },
          },
        },
      },
      q4: {
        questionNo: {
          type: Number,
          default: 1,
        },
        questionText: String,
        resOptions: {
          opt1: {
            optNo: { type: Number, default: 1 },
            optText: { String, default: "Strongly Agree" },
          },
          opt2: {
            optNo: { type: Number, default: 1 },
            optText: { String, default: "Slightly Agree" },
          },
          opt3: {
            optNo: { type: Number, default: 1 },
            optText: { String, default: "Neutral" },
          },
          opt4: {
            optNo: { type: Number, default: 1 },
            optText: { String, default: "Strongly Disagree" },
          },
          opt5: {
            optNo: { type: Number, default: 1 },
            optText: { String, default: "Slightly Disagree" },
          },
        },
      },
      q5: {
        questionNo: {
          type: Number,
          default: 1,
        },
        questionText: String,
        resOptions: {
          opt1: {
            optNo: { type: Number, default: 1 },
            optText: { String, default: "Strongly Agree" },
          },
          opt2: {
            optNo: { type: Number, default: 1 },
            optText: { String, default: "Slightly Agree" },
          },
          opt3: {
            optNo: { type: Number, default: 1 },
            optText: { String, default: "Neutral" },
          },
          opt4: {
            optNo: { type: Number, default: 1 },
            optText: { String, default: "Strongly Disagree" },
          },
          opt5: {
            optNo: { type: Number, default: 1 },
            optText: { String, default: "Slightly Disagree" },
          },
        },
      },
    },
  },
  {
    collection: "survey",
  }
);

const Model = mongoose.model("Survey", SurveySchema);
export default Model;
