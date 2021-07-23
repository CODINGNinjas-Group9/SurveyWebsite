"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.default = router;
const surveys_1 = require("../Controllers/surveys");
router.get("/", surveys_1.DisplaySurveyListPage);
router.get("/edit/:id", surveys_1.DisplayEditPage);
router.post("/edit/:id", surveys_1.ProcessEditPage);
router.get("/edit", surveys_1.DisplayAddPage);
router.get("/:id", surveys_1.DisplaySurveyPage);
router.post("/:id", surveys_1.ProcessSurveyPage);
router.get("/delete/:id", surveys_1.ProcessDeleteSurvey);
router.get("/visibility/:id", surveys_1.ProcessVisibilityChange);
//# sourceMappingURL=survey-list.js.map