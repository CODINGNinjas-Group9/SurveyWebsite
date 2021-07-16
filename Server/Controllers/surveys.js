"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessDeleteSurvey = exports.ProcessSurveyPage = exports.DisplaySurveyPage = exports.DisplayAddPage = exports.DisplayEditPage = exports.DisplaySurveyListPage = void 0;
const Survey_1 = __importDefault(require("../Models/Survey"));
const surveyresponse_1 = __importDefault(require("../Models/surveyresponse"));
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
    let id = req.params.id;
    Survey_1.default.findById(id, {}, {}, (err, survey) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render("index", {
            title: survey.title,
            page: "survey",
            survey: survey,
        });
    });
}
exports.DisplaySurveyPage = DisplaySurveyPage;
function ProcessSurveyPage(req, res, next) {
    let id = req.params.id;
    let newSurveyResponse = new surveyresponse_1.default({
        surveyId: id,
        candidateName: req.body.candidateName,
        q1ResNo: req.body.group1,
        q2ResNo: req.body.group2,
        q3ResNo: req.body.group3,
        q4ResNo: req.body.group4,
        q5ResNo: req.body.group5,
    });
    surveyresponse_1.default.create(newSurveyResponse, (err) => {
        if (err) {
            console.log(err);
            return res.end(err);
        }
    });
    res.redirect("/");
}
exports.ProcessSurveyPage = ProcessSurveyPage;
function ProcessDeleteSurvey(req, res, next) {
    let id = req.params.id;
    Survey_1.default.deleteOne({ _id: id }, {}, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
        res.redirect("/survey-list");
    });
}
exports.ProcessDeleteSurvey = ProcessDeleteSurvey;
//# sourceMappingURL=surveys.js.map