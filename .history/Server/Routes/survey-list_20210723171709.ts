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
  DisplayAddPage,
  DisplaySurveyListPage,
  DisplayEditPage,
  DisplaySurveyPage,
  ProcessSurveyPage,
  ProcessDeleteSurvey,
  ProcessEditPage,
  ProcessVisibilityChange,
} from "../Controllers/surveys";

// Display the Survey List Page
router.get("/", DisplaySurveyListPage); // default route

// Display the Edit page by id
router.get("/edit/:id", DisplayEditPage);

// Process the Edit page by id
router.post("/edit/:id", ProcessEditPage);

// Display the Add page
router.get("/edit", DisplayAddPage);

// Display the take survey page
router.get("/:id", DisplaySurveyPage);

// Process the post survey
router.post("/:id", ProcessSurveyPage);

// Process the delete survey
router.get("/delete/:id", ProcessDeleteSurvey);

// Process the visibility toggle
router.get("/visibility/:id", ProcessVisibilityChange);
