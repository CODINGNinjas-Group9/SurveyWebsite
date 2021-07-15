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
} from "../Controllers/index";

/* GET home page. */
router.get("/", DisplayHomePage);

/* GET home page. */
router.get("/home", DisplayHomePage);

/* GET create survey page. */
router.get("/createsurveys", DisplayCreateSurveysPage);
router.get("/createSurveyTemplate", DisplayCreateSurveyTemplatePage);

/* GET create survey page. */
router.post("/createsurveys", ProcessCreateSurveysPage);

router.get("/createmcqsurveys", DisplayCreateMcqSurveysPage);

/* Get template selection page. */
router.get("/createSurveyTemplate", DisplayCreateSurveyTemplatePage);

/* GET create survey page. */
router.post("/createmcqsurveys", ProcessCreateMcqSurveysPage);

/* GET availbale surveys page. */
router.get("/availablesurveys", DisplayAvailableSurveysPage);

/* GET login page. */
router.get("/login", DisplayLoginPage);

/* GET sign-up page. */
router.get("/signup", DisplaySignupPage);
//module.exports = router;
