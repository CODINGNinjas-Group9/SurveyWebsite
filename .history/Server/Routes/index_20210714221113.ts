import express from 'express';
const router = express.Router();
export default router;

// instantiate an object of type index controller
import { DisplayAboutPage, DisplayContactPage, DisplayHomePage, DisplayProjectsPage, DisplayServicesPage } from '../Controllers/index';

/* GET home page. */
router.get('/', DisplayHomePage);

/* GET home page. */
router.get('/home', DisplayHomePage);

/* GET about page. */
router.get('/createsurvey', DisplayCreateSurveyPage);

/* GET projects page. */
router.get('/availablesurveys', DisplayAvailbaleSurveysPage);

/* GET services page. */
router.get('/login', DisplayLoginPage);

/* GET contact page. */
router.get('/signup', DisplayPage);
//module.exports = router;
