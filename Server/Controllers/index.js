"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayMessage = exports.PostContactController = exports.DisplayContactPage = exports.LogoutController = exports.PostLoginController = exports.PostRegisterController = exports.DisplayCreateSurveyTemplatePage = exports.DisplaySignupPage = exports.DisplayLoginPage = exports.ProcessCreateMcqSurveysPage = exports.DisplayCreateMcqSurveysPage = exports.ProcessCreateSurveysPage = exports.DisplayCreateSurveysPage = exports.DisplayHomePage = void 0;
const Survey_1 = __importDefault(require("../Models/Survey"));
const user_1 = __importDefault(require("../Models/user"));
const passport_1 = __importDefault(require("passport"));
const Utils_1 = require("../Utils");
const Contacts_1 = __importDefault(require("../Models/Contacts"));
function DisplayHomePage(req, res, next) {
    let today = new Date();
    let day = String(today.getDate()).padStart(2, "0");
    let month = String(today.getMonth() + 1).padStart(2, "0");
    let year = today.getFullYear();
    let currentDate = year + "-" + month + "-" + day;
    Survey_1.default.find({
        $or: [
            {
                $and: [
                    {
                        validDate: {
                            $gte: currentDate,
                        },
                    },
                    { startDate: { $lte: currentDate } },
                ],
            },
            { visibility: true },
        ],
    }, function (err, surveyCollection) {
        if (err) {
            return console.error(err);
        }
        res.render("index", {
            title: "Home",
            page: "home",
            surveys: surveyCollection,
            displayName: Utils_1.GetName(req),
        });
    });
}
exports.DisplayHomePage = DisplayHomePage;
function DisplayCreateSurveysPage(req, res, next) {
    res.render("index", {
        title: "Create Survey",
        page: "createsurvey",
        displayName: Utils_1.GetName(req),
    });
}
exports.DisplayCreateSurveysPage = DisplayCreateSurveysPage;
function ProcessCreateSurveysPage(req, res, next) {
    let newSurvey = new Survey_1.default({
        title: req.body.surveytitle,
        validDate: req.body.validity,
        startDate: req.body.start,
        description: req.body.description,
        creator: req.user.username,
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
    res.redirect("/messages");
}
exports.ProcessCreateSurveysPage = ProcessCreateSurveysPage;
function DisplayCreateMcqSurveysPage(req, res, next) {
    res.render("index", {
        title: "Create Survey",
        page: "createmcqsurvey",
        displayName: Utils_1.GetName(req),
    });
}
exports.DisplayCreateMcqSurveysPage = DisplayCreateMcqSurveysPage;
function ProcessCreateMcqSurveysPage(req, res, next) {
    let newSurvey = new Survey_1.default({
        title: req.body.surveytitle,
        validDate: req.body.validity,
        startDate: req.body.start,
        description: req.body.description,
        creator: req.user.username,
        questions: {
            q1: {
                questionText: req.body.q1,
                resOptions: {
                    opt1: {
                        optText: req.body.q1_resp1,
                    },
                    opt2: {
                        optText: req.body.q1_resp2,
                    },
                    opt3: {
                        optText: req.body.q1_resp3,
                    },
                    opt4: {
                        optText: req.body.q1_resp4,
                    },
                    opt5: {
                        optText: req.body.q1_resp5,
                    },
                },
            },
            q2: {
                questionText: req.body.q2,
                resOptions: {
                    opt1: {
                        optText: req.body.q2_resp1,
                    },
                    opt2: {
                        optText: req.body.q2_resp2,
                    },
                    opt3: {
                        optText: req.body.q2_resp3,
                    },
                    opt4: {
                        optText: req.body.q2_resp4,
                    },
                    opt5: {
                        optText: req.body.q2_resp5,
                    },
                },
            },
            q3: {
                questionText: req.body.q3,
                resOptions: {
                    opt1: {
                        optText: req.body.q3_resp1,
                    },
                    opt2: {
                        optText: req.body.q3_resp2,
                    },
                    opt3: {
                        optText: req.body.q3_resp3,
                    },
                    opt4: {
                        optText: req.body.q3_resp4,
                    },
                    opt5: {
                        optText: req.body.q3_resp5,
                    },
                },
            },
            q4: {
                questionText: req.body.q4,
                resOptions: {
                    opt1: {
                        optText: req.body.q4_resp1,
                    },
                    opt2: {
                        optText: req.body.q4_resp2,
                    },
                    opt3: {
                        optText: req.body.q4_resp3,
                    },
                    opt4: {
                        optText: req.body.q4_resp4,
                    },
                    opt5: {
                        optText: req.body.q4_resp5,
                    },
                },
            },
            q5: {
                questionText: req.body.q5,
                resOptions: {
                    opt1: {
                        optText: req.body.q5_resp1,
                    },
                    opt2: {
                        optText: req.body.q5_resp2,
                    },
                    opt3: {
                        optText: req.body.q5_resp3,
                    },
                    opt4: {
                        optText: req.body.q5_resp4,
                    },
                    opt5: {
                        optText: req.body.q5_resp5,
                    },
                },
            },
        },
    });
    Survey_1.default.create(newSurvey, (err) => {
        if (err) {
            console.log(err);
            return res.end(err);
        }
    });
    res.redirect("/messages");
}
exports.ProcessCreateMcqSurveysPage = ProcessCreateMcqSurveysPage;
function DisplayLoginPage(req, res, next) {
    res.render("index", {
        title: "Login",
        page: "login",
        messages: req.flash("loginMessage"),
        displayName: Utils_1.GetName(req),
    });
}
exports.DisplayLoginPage = DisplayLoginPage;
function DisplaySignupPage(req, res, next) {
    res.render("index", {
        title: "Sign Up",
        page: "signup",
        messages: req.flash("registerMessage"),
        displayName: Utils_1.GetName(req),
    });
}
exports.DisplaySignupPage = DisplaySignupPage;
function DisplayCreateSurveyTemplatePage(req, res, next) {
    res.render("index", {
        title: "Create Survey",
        page: "createSurveyTemplate",
        displayName: Utils_1.GetName(req),
    });
}
exports.DisplayCreateSurveyTemplatePage = DisplayCreateSurveyTemplatePage;
function PostRegisterController(req, res, next) {
    let newUser = new user_1.default({
        username: req.body.username,
        email: req.body.emailAddress,
        displayName: req.body.FirstName + " " + req.body.LastName,
    });
    user_1.default.register(newUser, req.body.password, (err) => {
        if (err) {
            console.error("Error: Inserting New User");
            if (err.name == "UserExistsError") {
                console.error("Error: User Already Exists");
            }
            req.flash("registerMessage", "Registration Error");
            return res.redirect("/signup");
        }
        return passport_1.default.authenticate("local")(req, res, () => {
            return res.redirect("/survey-list");
        });
    });
}
exports.PostRegisterController = PostRegisterController;
function PostLoginController(req, res, next) {
    passport_1.default.authenticate("local", (err, user, info) => {
        if (err) {
            console.error(err);
            return next(err);
        }
        if (!user) {
            req.flash("loginMessage", "Authentication Error");
            return res.redirect("/login");
        }
        req.login(user, (err) => {
            if (err) {
                console.error(err);
                return next(err);
            }
            return res.redirect("/survey-list");
        });
    })(req, res, next);
}
exports.PostLoginController = PostLoginController;
function LogoutController(req, res, next) {
    req.logout();
    res.redirect("/login");
}
exports.LogoutController = LogoutController;
function DisplayContactPage(req, res, next) {
    res.render("index", {
        title: "Contact Us",
        page: "contact",
        displayName: Utils_1.GetName(req),
    });
}
exports.DisplayContactPage = DisplayContactPage;
function PostContactController(req, res, next) {
    let newContact = new Contacts_1.default({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        contactNumber: req.body.contactNumber,
        emailAddress: req.body.emailAddress,
        inputMessage: req.body.inputMessage,
    });
    Contacts_1.default.create(newContact, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect("/messages");
    });
}
exports.PostContactController = PostContactController;
function DisplayMessage(req, res, next) {
    res.render("index", {
        title: "Success",
        page: "messages",
        displayName: Utils_1.GetName(req),
    });
}
exports.DisplayMessage = DisplayMessage;
//# sourceMappingURL=index.js.map