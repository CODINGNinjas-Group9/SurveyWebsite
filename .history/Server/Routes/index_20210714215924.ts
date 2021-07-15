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
router.get('/createsurvey', DisplayAboutPage);

/* GET projects page. */
router.get('/availablesurveys', DisplayProjectsPage);

/* GET services page. */
router.get('/login', DisplayServicesPage);

/* GET contact page. */
router.get('/contact', DisplayContactPage);
//module.exports = router;