import express from 'express';
const router = express.Router();
export default router;

// instantiate an object of type index controller
import { DisplayAboutPage, DisplayContactPage, DisplayHomePage, DisplayProjectsPage, DisplayServicesPage } from '../Controllers/index';

/* GET home page. */
router.get('/', DisplayHomePage);

/* GET home page. */
router.get('/home', DisplayHomePage);

/* GET create survey page. */
router.get('/createsurvey', DisplayCreateSurveyPage);

/* GET projects page. */
router.get('/availablesurveys', DisplayAvailableSurveysPage);

/* GET services page. */
router.get('/login', DisplayLoginPage);

/* GET contact page. */
router.get('/signup', DisplaySignupPage);
//module.exports = router;
