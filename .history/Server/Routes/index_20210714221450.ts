import express from 'express';
const router = express.Router();
export default router;

// instantiate an object of type index controller
import { DisplayCreateSurveyPage, DisplayAvailableSurveysPage, DisplayHomePage, DisplayLoginPage, DisplaySignupPage } from '../Controllers/index';

/* GET home page. */
router.get('/', DisplayHomePage);

/* GET home page. */
router.get('/home', DisplayHomePage);

/* GET create survey page. */
router.get('/createsurvey', DisplayCreateSurveyPage);

/* GET availbale surveys page. */
router.get('/availablesurveys', DisplayAvailableSurveysPage);

/* GET login page. */
router.get('/login', DisplayLoginPage);

/* GET sign-up page. */
router.get('/signup', DisplaySignupPage);
//module.exports = router;
