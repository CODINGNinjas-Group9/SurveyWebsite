/*  File Descripton :-  index.ts routes File 
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

// instantiate an object of type index controller
import {
  DisplayCreateSurveyTemplatePage,
  DisplayCreateSurveysPage,
  DisplayAvailableSurveysPage,
  DisplayHomePage,
  DisplayLoginPage,
  DisplaySignupPage,
  ProcessCreateSurveysPage,
  DisplayCreateMcqSurveysPage,
  ProcessCreateMcqSurveysPage,
  PostRegisterController,
  PostLoginController,
  LogoutController,
} from "../Controllers/index";

/* GET home page. */
router.get("/", DisplayHomePage);

/* GET home page. */
router.get("/home", DisplayHomePage);

/* Get template selection page. */
router.get("/createSurveyTemplate", DisplayCreateSurveyTemplatePage);

/* GET create survey page. */
router.get("/createsurveys", DisplayCreateSurveysPage);

/* Post create survey page. */
router.post("/createsurveys", ProcessCreateSurveysPage);

/* GET create MCQs based survey page. */
router.get("/createmcqsurveys", DisplayCreateMcqSurveysPage);

/* Post create survey page. */
router.post("/createmcqsurveys", ProcessCreateMcqSurveysPage);

/* GET availbale surveys page. */
router.get("/availablesurveys", DisplayAvailableSurveysPage);

/* GET login page. */
router.get("/login", DisplayLoginPage);

/* GET sign-up page. */
router.get("/signup", DisplaySignupPage);
//module.exports = router;

/* POST sign-up page. */
router.post("/signup", PostRegisterController);
/* POST sign-in page. */
router.post("/signin", PostLoginController);
