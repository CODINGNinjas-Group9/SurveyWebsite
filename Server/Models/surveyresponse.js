"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const SurveyResponseSchema = new Schema({
    surveyId: String,
    candidateName: String,
    q1ResNo: Number,
    q2ResNo: Number,
    q3ResNo: Number,
    q4ResNo: Number,
    q5ResNo: Number,
}, {
    collection: "response",
});
const Model = mongoose_1.default.model("Response", SurveyResponseSchema);
exports.default = Model;
//# sourceMappingURL=surveyresponse.js.map