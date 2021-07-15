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
router.get("/createSurvey", index_1.DisplayCreateSurveyPage);
router.post("/createsurveys", index_1.ProcessCreateSurveysPage);
router.get("/availablesurveys", index_1.DisplayAvailableSurveysPage);
router.get("/login", index_1.DisplayLoginPage);
router.get("/signup", index_1.DisplaySignupPage);
//# sourceMappingURL=index.js.map