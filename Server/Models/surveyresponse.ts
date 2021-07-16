/*  File Descripton :-  surveyresponse.ts File - database survey schema
    Website Name :- Survey Ninjas
      Team Name :- CodingNinjas

        Anureet Kaur - 301174444
        Mridula Ramakrishnan - 301145813
        Muhammad Hassan - 301178235
        Nilam Keshwala - 301042029
        Raghuveer Manam - 300715775
        Roshna Raju - 301174285

        Date: 16th July 2021
*/

import mongoose from "mongoose";
const Schema = mongoose.Schema; // alias for the mongoose schema

const SurveyResponseSchema = new Schema(
  {
    surveyId: String,
    candidateName: String,
    q1ResNo: Number,
    q2ResNo: Number,
    q3ResNo: Number,
    q4ResNo: Number,
    q5ResNo: Number,
  },
  {
    collection: "sresponse",
  }
);

const Model = mongoose.model("SurveyResponse", SurveyResponseSchema);
export default Model;
