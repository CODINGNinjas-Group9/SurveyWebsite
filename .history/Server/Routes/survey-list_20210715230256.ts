import express from "express";
const router = express.Router();
export default router;

// instantiate an object of type survey controller
import {
  DisplayAddPage,
  DisplaySurveyListPage,
  DisplayEditPage,
  DisplaySurveyPage,
  ProcessSurveyPage,
  ProcessDeleteSurvey,
} from "../Controllers/surveys";

// Display the Survey List Page
router.get("/", DisplaySurveyListPage); // default route

// Display the Edit page by id
router.get("/edit/:id", DisplayEditPage);

// Display the Add page
router.get("/edit", DisplayAddPage);

// Display the take survey page
router.get("/:id", DisplaySurveyPage);

// Process the post survey
router.post("/:id", ProcessSurveyPage);

// Process the delete survey
router.get("delete/:id", ProcessDeleteSurvey);
