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
router.get("/edit", surveys_1.DisplayAddPage);
router.get("/:id", surveys_1.DisplaySurveyPage);
//# sourceMappingURL=survey-list.js.map