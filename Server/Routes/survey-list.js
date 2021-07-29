"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.default = router;
const surveys_1 = require("../Controllers/surveys");
const Utils_1 = require("../Utils");
router.get("/", Utils_1.AuthGuard, surveys_1.DisplaySurveyListPage);
router.get("/edit/:id", Utils_1.AuthGuard, surveys_1.DisplayEditPage);
router.post("/edit/:id", Utils_1.AuthGuard, surveys_1.ProcessEditPage);
router.get("/:id", surveys_1.DisplaySurveyPage);
router.post("/:id", surveys_1.ProcessSurveyPage);
router.get("/delete/:id", Utils_1.AuthGuard, surveys_1.ProcessDeleteSurvey);
router.get("/visibility/:id", Utils_1.AuthGuard, surveys_1.ProcessVisibilityChange);
//# sourceMappingURL=survey-list.js.map