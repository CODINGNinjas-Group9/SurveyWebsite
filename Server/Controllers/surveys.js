"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowResultsPage = exports.ProcessVisibilityChange = exports.ProcessDeleteSurvey = exports.ProcessSurveyPage = exports.DisplaySurveyPage = exports.ProcessEditPage = exports.DisplayEditPage = exports.DisplaySurveyListPage = void 0;
const Survey_1 = __importDefault(require("../Models/Survey"));
const surveyresponse_1 = __importDefault(require("../Models/surveyresponse"));
const Utils_1 = require("../Utils");
function DisplaySurveyListPage(req, res, next) {
    Survey_1.default.find({
        creator: req.user.username,
    }, function (err, surveyCollection) {
        if (err) {
            return console.error(err);
        }
        res.render("index", {
            title: "Survey List",
            page: "survey-list",
            surveys: surveyCollection,
            displayName: Utils_1.GetName(req),
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
            page: "updatesurvey",
            survey: surveyItemToEdit,
            displayName: Utils_1.GetName(req),
        });
    });
}
exports.DisplayEditPage = DisplayEditPage;
function ProcessEditPage(req, res, next) {
    let id = req.params.id;
    Survey_1.default.findById(id, {}, {}, (err, updatedSurvey) => {
        id = updatedSurvey._id;
        updatedSurvey.title = req.body.surveytitle;
        updatedSurvey.validDate = req.body.validity;
        updatedSurvey.startDate = req.body.start;
        updatedSurvey.description = req.body.description;
        updatedSurvey.questions.q1.questionText = req.body.q1;
        updatedSurvey.questions.q2.questionText = req.body.q2;
        updatedSurvey.questions.q3.questionText = req.body.q3;
        updatedSurvey.questions.q4.questionText = req.body.q4;
        updatedSurvey.questions.q5.questionText = req.body.q5;
        Survey_1.default.updateOne({ _id: id }, updatedSurvey, {}, (err) => {
            if (err) {
                console.log(err);
                res.end(err);
            }
            res.redirect("/survey-list");
        });
    });
}
exports.ProcessEditPage = ProcessEditPage;
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
            displayName: Utils_1.GetName(req),
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
    res.redirect("/messages");
}
exports.ProcessSurveyPage = ProcessSurveyPage;
function ProcessDeleteSurvey(req, res, next) {
    let id = req.params.id;
    Survey_1.default.deleteOne({ _id: id }, {}, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
    });
    surveyresponse_1.default.deleteMany({ surveyId: id }, {}, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        }
    });
    res.redirect("/survey-list");
}
exports.ProcessDeleteSurvey = ProcessDeleteSurvey;
function ProcessVisibilityChange(req, res, next) {
    let id = req.params.id;
    Survey_1.default.findById(id, {}, {}, (err, updatedSurvey) => {
        id = updatedSurvey._id;
        updatedSurvey.visibility = !updatedSurvey.visibility;
        Survey_1.default.updateOne({ _id: id }, updatedSurvey, {}, (err) => {
            if (err) {
                console.log(err);
                res.end(err);
            }
            res.redirect("/survey-list");
        });
    });
}
exports.ProcessVisibilityChange = ProcessVisibilityChange;
function ShowResultsPage(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        let id = req.params.id;
        let resultSurvey = null;
        const myResponses = [];
        const resSet = [];
        resultSurvey = yield Survey_1.default.findById(id);
        for (let count = 0; count < 5; count++) {
            myResponses[count] = yield surveyresponse_1.default.aggregate([
                { $match: { surveyId: id } },
                { $group: { _id: "$q" + (count + 1) + "ResNo", total: { $sum: 1 } } },
                { $sort: { _id: 1 } },
                { $project: { surveyId: 1, _id: 0, r: "$_id", total: 1 } },
            ]);
        }
        for (let count = 0; count < 5; count++) {
            let responseArray = [];
            for (let i = 0; i < myResponses[count].length; i++) {
                responseArray[i] = {
                    resText: resultSurvey.questions["q" + (count + 1)].resOptions["opt" + myResponses[count][i].r].optText,
                    total: myResponses[count][i].total,
                };
            }
            resSet[count] = {
                title: resultSurvey.title,
                question: resultSurvey.questions["q" + (count + 1)].questionText,
                res: responseArray,
            };
        }
        res.render("index", {
            title: "Statistics",
            page: "results",
            resSet: resSet,
            displayName: Utils_1.GetName(req),
        });
    });
}
exports.ShowResultsPage = ShowResultsPage;
//# sourceMappingURL=surveys.js.map