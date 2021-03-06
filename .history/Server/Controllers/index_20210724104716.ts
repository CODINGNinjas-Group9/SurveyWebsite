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

// Get Home page

export function DisplayHomePage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  res.render("index", { title: "Home", page: "home" });
}

// Get Agree/Disagree survey Create page
export function DisplayCreateSurveysPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  res.render("index", { title: "Create Survey", page: "createsurvey" });
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
    description: req.body.description,
    creator: "Group-9",
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
  res.redirect("/");
}

// Get MCQs survey Create page template
export function DisplayCreateMcqSurveysPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  res.render("index", { title: "Create Survey", page: "createmcqsurvey" });
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
    description: req.body.description,
    creator: "Group-9",
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
  res.redirect("/");
}

// Get List of survey page
export function DisplayAvailableSurveysPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  res.render("index", { title: "Available Surveys", page: "availablesurveys" });
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

      return res.redirect("/register");
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
