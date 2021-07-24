"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.default = router;
const index_1 = require("../Controllers/index");
router.get("/", index_1.DisplayHomePage);
router.get("/home", index_1.DisplayHomePage);
router.get("/createSurveyTemplate", index_1.DisplayCreateSurveyTemplatePage);
router.get("/createsurveys", index_1.DisplayCreateSurveysPage);
router.post("/createsurveys", index_1.ProcessCreateSurveysPage);
router.get("/createmcqsurveys", index_1.DisplayCreateMcqSurveysPage);
router.post("/createmcqsurveys", index_1.ProcessCreateMcqSurveysPage);
router.get("/availablesurveys", index_1.DisplayAvailableSurveysPage);
router.get("/login", index_1.DisplayLoginPage);
router.get("/signup", index_1.DisplaySignupPage);
router.post("/signup", index_1.PostRegisterController);
router.post("/login", index_1.PostLoginController);
router.get("/logout", index_1.LogoutController);
//# sourceMappingURL=index.js.map