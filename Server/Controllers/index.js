"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplaySignupPage = exports.DisplayLoginPage = exports.DisplayAvailableSurveysPage = exports.DisplayCreateSurveysPage = exports.DisplayHomePage = void 0;
function DisplayHomePage(req, res, next) {
    res.render("index", { title: "Home", page: "home" });
}
exports.DisplayHomePage = DisplayHomePage;
function DisplayCreateSurveysPage(req, res, next) {
    res.render("index", { title: "Create Survey", page: "createsurvey" });
}
exports.DisplayCreateSurveysPage = DisplayCreateSurveysPage;
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
//# sourceMappingURL=index.js.map