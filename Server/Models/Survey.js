"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const SurveySchema = new Schema({
    title: String,
    creator: String,
    startDate: String,
    validDate: String,
    description: String,
    visibility: { type: Boolean, default: false },
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
                    optText: { type: String, default: "Strongly Agree" },
                },
                opt2: {
                    optNo: { type: Number, default: 2 },
                    optText: { type: String, default: "Slightly Agree" },
                },
                opt3: {
                    optNo: { type: Number, default: 3 },
                    optText: { type: String, default: "Neutral" },
                },
                opt4: {
                    optNo: { type: Number, default: 4 },
                    optText: { type: String, default: "Strongly Disagree" },
                },
                opt5: {
                    optNo: { type: Number, default: 5 },
                    optText: { type: String, default: "Slightly Disagree" },
                },
            },
        },
        q2: {
            questionNo: {
                type: Number,
                default: 2,
            },
            questionText: String,
            resOptions: {
                opt1: {
                    optNo: { type: Number, default: 1 },
                    optText: { type: String, default: "Strongly Agree" },
                },
                opt2: {
                    optNo: { type: Number, default: 2 },
                    optText: { type: String, default: "Slightly Agree" },
                },
                opt3: {
                    optNo: { type: Number, default: 3 },
                    optText: { type: String, default: "Neutral" },
                },
                opt4: {
                    optNo: { type: Number, default: 4 },
                    optText: { type: String, default: "Slightly Disagree" },
                },
                opt5: {
                    optNo: { type: Number, default: 5 },
                    optText: { type: String, default: "Strongly Disagree" },
                },
            },
        },
        q3: {
            questionNo: {
                type: Number,
                default: 3,
            },
            questionText: String,
            resOptions: {
                opt1: {
                    optNo: { type: Number, default: 1 },
                    optText: { type: String, default: "Strongly Agree" },
                },
                opt2: {
                    optNo: { type: Number, default: 2 },
                    optText: { type: String, default: "Slightly Agree" },
                },
                opt3: {
                    optNo: { type: Number, default: 3 },
                    optText: { type: String, default: "Neutral" },
                },
                opt4: {
                    optNo: { type: Number, default: 4 },
                    optText: { type: String, default: "Strongly Disagree" },
                },
                opt5: {
                    optNo: { type: Number, default: 5 },
                    optText: { type: String, default: "Slightly Disagree" },
                },
            },
        },
        q4: {
            questionNo: {
                type: Number,
                default: 4,
            },
            questionText: String,
            resOptions: {
                opt1: {
                    optNo: { type: Number, default: 1 },
                    optText: { type: String, default: "Strongly Agree" },
                },
                opt2: {
                    optNo: { type: Number, default: 2 },
                    optText: { type: String, default: "Slightly Agree" },
                },
                opt3: {
                    optNo: { type: Number, default: 3 },
                    optText: { type: String, default: "Neutral" },
                },
                opt4: {
                    optNo: { type: Number, default: 4 },
                    optText: { type: String, default: "Strongly Disagree" },
                },
                opt5: {
                    optNo: { type: Number, default: 5 },
                    optText: { type: String, default: "Slightly Disagree" },
                },
            },
        },
        q5: {
            questionNo: {
                type: Number,
                default: 5,
            },
            questionText: String,
            resOptions: {
                opt1: {
                    optNo: { type: Number, default: 1 },
                    optText: { type: String, default: "Strongly Agree" },
                },
                opt2: {
                    optNo: { type: Number, default: 2 },
                    optText: { type: String, default: "Slightly Agree" },
                },
                opt3: {
                    optNo: { type: Number, default: 3 },
                    optText: { type: String, default: "Neutral" },
                },
                opt4: {
                    optNo: { type: Number, default: 4 },
                    optText: { type: String, default: "Strongly Disagree" },
                },
                opt5: {
                    optNo: { type: Number, default: 5 },
                    optText: { type: String, default: "Slightly Disagree" },
                },
            },
        },
    },
}, {
    collection: "survey",
});
const Model = mongoose_1.default.model("Survey", SurveySchema);
exports.default = Model;
//# sourceMappingURL=Survey.js.map