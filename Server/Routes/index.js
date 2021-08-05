"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const Utils_1 = require("../Utils");
const index_1 = require("../Controllers/index");
router.get("/", index_1.DisplayHomePage);
router.get("/home", index_1.DisplayHomePage);
router.get("/createSurveyTemplate", Utils_1.AuthGuard, index_1.DisplayCreateSurveyTemplatePage);
router.get("/createsurveys", Utils_1.AuthGuard, index_1.DisplayCreateSurveysPage);
router.post("/createsurveys", Utils_1.AuthGuard, index_1.ProcessCreateSurveysPage);
router.get("/createmcqsurveys", Utils_1.AuthGuard, index_1.DisplayCreateMcqSurveysPage);
router.post("/createmcqsurveys", Utils_1.AuthGuard, index_1.ProcessCreateMcqSurveysPage);
router.get("/login", index_1.DisplayLoginPage);
router.get("/signup", index_1.DisplaySignupPage);
router.post("/signup", index_1.PostRegisterController);
router.post("/login", index_1.PostLoginController);
router.get("/logout", Utils_1.AuthGuard, index_1.LogoutController);
router.get("/contact", index_1.DisplayContactPage);
router.post("/contact", index_1.PostContactController);
router.get("/messages", index_1.DisplayMessage);
exports.default = router;
//# sourceMappingURL=index.js.map