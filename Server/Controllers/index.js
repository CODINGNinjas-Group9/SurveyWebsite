"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayCreateSurveyTemplatePage = exports.DisplaySignupPage = exports.DisplayLoginPage = exports.DisplayAvailableSurveysPage = exports.ProcessCreateMcqSurveysPage = exports.DisplayCreateMcqSurveysPage = exports.ProcessCreateSurveysPage = exports.DisplayCreateSurveysPage = exports.DisplayHomePage = void 0;
const Survey_1 = __importDefault(require("../Models/Survey"));
function DisplayHomePage(req, res, next) {
    res.render("index", { title: "Home", page: "home" });
}
exports.DisplayHomePage = DisplayHomePage;
function DisplayCreateSurveysPage(req, res, next) {
    res.render("index", { title: "Create Survey", page: "createSurvey" });
}
exports.DisplayCreateSurveysPage = DisplayCreateSurveysPage;
function ProcessCreateSurveysPage(req, res, next) {
    let newSurvey = new Survey_1.default({
        title: req.body.surveytitle,
        validDate: req.body.validity,
        description: req.body.description,
        creator: "Group-9",
        questions: {
            q1: { questionText: req.body.q1 },
            q2: { questionText: req.body.q2 },
            q3: { questionText: req.body.q3 },
            q4: { questionText: req.body.q4 },
            q5: { questionText: req.body.q5 },
        },
    });
    Survey_1.default.create(newSurvey, (err) => {
        if (err) {
            console.log(err);
            return res.end(err);
        }
    });
    res.redirect("/");
}
exports.ProcessCreateSurveysPage = ProcessCreateSurveysPage;
function DisplayCreateMcqSurveysPage(req, res, next) {
    res.render("index", { title: "Create Survey", page: "createmcqsurvey" });
}
exports.DisplayCreateMcqSurveysPage = DisplayCreateMcqSurveysPage;
function ProcessCreateMcqSurveysPage(req, res, next) {
    let newSurvey = new Survey_1.default({
        title: req.body.surveytitle,
        validDate: req.body.validity,
        description: req.body.description,
        creator: "Group-9",
        questions: {
            q1: { questionText: req.body.q1 },
            q2: { questionText: req.body.q2 },
            q3: { questionText: req.body.q3 },
            q4: { questionText: req.body.q4 },
            q5: { questionText: req.body.q5 },
        },
    });
    Survey_1.default.create(newSurvey, (err) => {
        if (err) {
            console.log(err);
            return res.end(err);
        }
    });
    res.redirect("/");
}
exports.ProcessCreateMcqSurveysPage = ProcessCreateMcqSurveysPage;
function DisplayAvailableSurveysPage(req, res, next) {
    res.render("index", { title: "Available Surveys", page: "availablesurveys" });
}
exports.DisplayAvailableSurveysPage = DisplayAvailableSurveysPage;
function DisplayLoginPage(req, res, next) {
    res.render("index", { title: "Login", page: "login" });
}
exports.DisplayLoginPage = DisplayLoginPage;
function DisplaySignupPage(req, res, next) {
    res.render("index", { title: "Sign Up", page: "signup" });
}
exports.DisplaySignupPage = DisplaySignupPage;
function DisplayCreateSurveyTemplatePage(req, res, next) {
    res.render("index", {
        title: "Create Survey",
        page: "createSurveyTemplate",
    });
}
exports.DisplayCreateSurveyTemplatePage = DisplayCreateSurveyTemplatePage;
//# sourceMappingURL=index.js.map