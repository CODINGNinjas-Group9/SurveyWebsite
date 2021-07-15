"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplaySurveyPage = exports.DisplayAddPage = exports.DisplayEditPage = exports.DisplaySurveyListPage = void 0;
const Survey_1 = __importDefault(require("../Models/Survey"));
function DisplaySurveyListPage(req, res, next) {
    Survey_1.default.find(function (err, surveyCollection) {
        if (err) {
            return console.error(err);
        }
        res.render("index", {
            title: "Survey List",
            page: "survey-list",
            surveys: surveyCollection,
        });
    });
}
exports.DisplaySurveyListPage = DisplaySurveyListPage;
function DisplayEditPage(req, res, next) {
    let id = req.params.id;
    console.log(id);
    Survey_1.default.findById(id, {}, {}, (err, surveyItemToEdit) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render("index", {
            title: "Edit",
            page: "edit",
            survey: surveyItemToEdit,
        });
    });
}
exports.DisplayEditPage = DisplayEditPage;
function DisplayAddPage(req, res, next) {
    res.render("index", { title: "Add", page: "edit", survey: "" });
}
exports.DisplayAddPage = DisplayAddPage;
function DisplaySurveyPage(req, res, next) {
    res.render("index", { title: "Add", page: "survey", survey: "" });
}
exports.DisplaySurveyPage = DisplaySurveyPage;
//# sourceMappingURL=surveys.js.map