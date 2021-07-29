/*  File Descripton :-  survey-list.ts routes File
    Website Name :- Survey Ninjas
      Team Name :- CodingNinjas

        Anureet Kaur - 301174444
        Mridula Ramakrishnan - 301145813
        Muhammad Hassan - 301178235
        Nilam Keshwala - 301042029
        Raghuveer Manam - 300715775
        Roshna Raju - 301174285

        Date: 16th July 2021
*/

import express from "express";
const router = express.Router();
export default router;

// instantiate an object of type survey controller
import {
  DisplaySurveyListPage,
  DisplayEditPage,
  DisplaySurveyPage,
  ProcessSurveyPage,
  ProcessDeleteSurvey,
  ProcessEditPage,
  ProcessVisibilityChange,
  ShowResultsPage,
} from "../Controllers/surveys";
import { AuthGuard } from "../Utils";

// Display the Survey List Page
router.get("/", AuthGuard, DisplaySurveyListPage); // default route

// Display the Edit page by id
router.get("/edit/:id", AuthGuard, DisplayEditPage);

// Process the Edit page by id
router.post("/edit/:id", AuthGuard, ProcessEditPage);

// Display the take survey page
router.get("/:id", DisplaySurveyPage);

// Process the post survey
router.post("/:id", ProcessSurveyPage);

// Process the delete survey
router.get("/delete/:id", AuthGuard, ProcessDeleteSurvey);

// Process the visibility toggle
router.get("/visibility/:id", AuthGuard, ProcessVisibilityChange);

// Display survey results page
router.get("/results/:id", AuthGuard, ShowResultsPage);
