import express from "express";
const router = express.Router();
export default router;

// instantiate an object of type index controller
import {
  DisplayCreateSurveyTemplatePage,
  DisplayCreateSurveyPage,
  DisplayAvailableSurveysPage,
  DisplayHomePage,
  DisplayLoginPage,
  DisplaySignupPage,
  ProcessCreateSurveysPage,
} from "../Controllers/index";

/* GET home page. */
router.get("/", DisplayHomePage);

/* GET home page. */
router.get("/home", DisplayHomePage);

/* GET create survey page. */
/*router.get("/createsurveys", DisplayCreateSurveysPage);*/
router.get("/createSurveyTemplate", DisplayCreateSurveyTemplatePage);
router.get("/createSurvey", DisplayCreateSurveyPage);

/* GET create survey page. */
router.post("/createsurveys", ProcessCreateSurveysPage);

/* GET availbale surveys page. */
router.get("/availablesurveys", DisplayAvailableSurveysPage);

/* GET login page. */
router.get("/login", DisplayLoginPage);

/* GET sign-up page. */
router.get("/signup", DisplaySignupPage);
//module.exports = router;
