/*  File Descripton :-  index.ts File containing controllers for creating surveys
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

import express, { Request, Response, NextFunction } from "express";
import Survey from "../Models/Survey";
import User from "../Models/user";
import passport from "passport";
import { GetName } from "../Utils";
import Contacts from "../Models/Contacts";

// Get Home page

export function DisplayHomePage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  let today = new Date();
  let day = String(today.getDate()).padStart(2, "0");
  let month = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let year = today.getFullYear();
  let currentDate = year + "-" + month + "-" + day;
  Survey.find(
    {
      $or: [
        {
          $and: [
            {
              validDate: {
                $gte: currentDate,
              },
            },
            { startDate: { $lte: currentDate } },
          ],
        },
        { visibility: true },
      ],
    },
    function (err, surveyCollection) {
      if (err) {
        return console.error(err);
      }

      res.render("index", {
        title: "Home",
        page: "home",
        surveys: surveyCollection,
        displayName: GetName(req),
      });
    }
  );
}

// Get Agree/Disagree survey Create page
export function DisplayCreateSurveysPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  res.render("index", {
    title: "Create Survey",
    page: "createsurvey",
    displayName: GetName(req),
  });
}

// Post Agree/Disagree survey
export function ProcessCreateSurveysPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  let newSurvey = new Survey({
    title: req.body.surveytitle,
    validDate: req.body.validity,
    startDate: req.body.start,
    description: req.body.description,
    creator: req.user.username,
    questions: {
      q1: { questionText: req.body.q1 },
      q2: { questionText: req.body.q2 },
      q3: { questionText: req.body.q3 },
      q4: { questionText: req.body.q4 },
      q5: { questionText: req.body.q5 },
    },
  });
  Survey.create(newSurvey, (err) => {
    if (err) {
      console.log(err);
      return res.end(err);
    }
  });
  res.redirect("/messages");
}

// Get MCQs survey Create page template
export function DisplayCreateMcqSurveysPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  res.render("index", {
    title: "Create Survey",
    page: "createmcqsurvey",
    displayName: GetName(req),
  });
}

// Post MCQs survey create
export function ProcessCreateMcqSurveysPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  let newSurvey = new Survey({
    title: req.body.surveytitle,
    validDate: req.body.validity,
    startDate: req.body.start,
    description: req.body.description,
    creator: req.user.username,
    questions: {
      q1: {
        questionText: req.body.q1,
        resOptions: {
          opt1: {
            optText: req.body.q1_resp1,
          },
          opt2: {
            optText: req.body.q1_resp2,
          },
          opt3: {
            optText: req.body.q1_resp3,
          },
          opt4: {
            optText: req.body.q1_resp4,
          },
          opt5: {
            optText: req.body.q1_resp5,
          },
        },
      },
      q2: {
        questionText: req.body.q2,
        resOptions: {
          opt1: {
            optText: req.body.q2_resp1,
          },
          opt2: {
            optText: req.body.q2_resp2,
          },
          opt3: {
            optText: req.body.q2_resp3,
          },
          opt4: {
            optText: req.body.q2_resp4,
          },
          opt5: {
            optText: req.body.q2_resp5,
          },
        },
      },
      q3: {
        questionText: req.body.q3,
        resOptions: {
          opt1: {
            optText: req.body.q3_resp1,
          },
          opt2: {
            optText: req.body.q3_resp2,
          },
          opt3: {
            optText: req.body.q3_resp3,
          },
          opt4: {
            optText: req.body.q3_resp4,
          },
          opt5: {
            optText: req.body.q3_resp5,
          },
        },
      },
      q4: {
        questionText: req.body.q4,
        resOptions: {
          opt1: {
            optText: req.body.q4_resp1,
          },
          opt2: {
            optText: req.body.q4_resp2,
          },
          opt3: {
            optText: req.body.q4_resp3,
          },
          opt4: {
            optText: req.body.q4_resp4,
          },
          opt5: {
            optText: req.body.q4_resp5,
          },
        },
      },
      q5: {
        questionText: req.body.q5,
        resOptions: {
          opt1: {
            optText: req.body.q5_resp1,
          },
          opt2: {
            optText: req.body.q5_resp2,
          },
          opt3: {
            optText: req.body.q5_resp3,
          },
          opt4: {
            optText: req.body.q5_resp4,
          },
          opt5: {
            optText: req.body.q5_resp5,
          },
        },
      },
    },
  });
  Survey.create(newSurvey, (err) => {
    if (err) {
      console.log(err);
      return res.end(err);
    }
  });
  res.redirect("/messages");
}

// Get Login page
export function DisplayLoginPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  res.render("index", {
    title: "Login",
    page: "login",
    messages: req.flash("loginMessage"),
    displayName: GetName(req),
  });
}

// Get Signup page
export function DisplaySignupPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  res.render("index", {
    title: "Sign Up",
    page: "signup",
    messages: req.flash("registerMessage"),
    displayName: GetName(req),
  });
}

// Get survey template selection page
export function DisplayCreateSurveyTemplatePage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  res.render("index", {
    title: "Create Survey",
    page: "createSurveyTemplate",
    displayName: GetName(req),
  });
}

// post: create new user
export function PostRegisterController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // instantiate a new User Object
  let newUser = new User({
    username: req.body.username,
    email: req.body.emailAddress,
    displayName: req.body.FirstName + " " + req.body.LastName,
  });

  User.register(newUser, req.body.password, (err) => {
    if (err) {
      console.error("Error: Inserting New User");
      if (err.name == "UserExistsError") {
        console.error("Error: User Already Exists");
      }
      req.flash("registerMessage", "Registration Error");

      return res.redirect("/signup");
    }

    //after successful registration - login the user
    return passport.authenticate("local")(req, res, () => {
      return res.redirect("/survey-list");
    });
  });
}
//post login process
export function PostLoginController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  passport.authenticate("local", (err, user, info) => {
    // are there any server errors?
    if (err) {
      console.error(err);
      return next(err);
    }

    // are there any login errors?
    if (!user) {
      req.flash("loginMessage", "Authentication Error");
      return res.redirect("/login");
    }

    req.login(user, (err) => {
      // are there db errors?
      if (err) {
        console.error(err);
        return next(err);
      }

      return res.redirect("/survey-list");
    });
  })(req, res, next);
}
//get: logout controller
export function LogoutController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  req.logout();

  res.redirect("/login");
}

// Get MCQs survey Create page template
export function DisplayContactPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  res.render("index", {
    title: "Contact Us",
    page: "contact",
    displayName: GetName(req),
  });
}

// Post Contact us
export function PostContactController(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  // instantiate a new contacts
  let newContact = new Contacts({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    contactNumber: req.body.contactNumber,
    emailAddress: req.body.emailAddress,
    inputMessage: req.body.inputMessage,
  });

  // db.contacts.insert({contacts data is here...})
  Contacts.create(newContact, (err) => {
    if (err) {
      console.error(err);
      res.end(err);
    }
    res.redirect("/messages");
  });
}

// Display message
export function DisplayMessage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  res.render("index", {
    title: "Success",
    page: "messages",
    displayName: GetName(req),
  });
}
