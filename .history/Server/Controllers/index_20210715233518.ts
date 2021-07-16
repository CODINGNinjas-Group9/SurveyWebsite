import express, { Request, Response, NextFunction } from "express";
import Survey from "../Models/Survey";

// Display Page Functions

export function DisplayHomePage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  res.render("index", { title: "Home", page: "home" });
}

export function DisplayCreateSurveysPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  res.render("index", { title: "Create Survey", page: "createSurvey" });
}

export function ProcessCreateSurveysPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  let newSurvey = new Survey({
    title: req.body.surveytitle,
    validDate: ISODate(req.body.validity),
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

export function DisplayCreateMcqSurveysPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  res.render("index", { title: "Create Survey", page: "createmcqsurvey" });
}

export function ProcessCreateMcqSurveysPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  let newSurvey = new Survey({
    title: req.body.surveytitle,
    validDate: ISODate(req.body.validity),
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

export function DisplayAvailableSurveysPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  res.render("index", { title: "Available Surveys", page: "availablesurveys" });
}

export function DisplayLoginPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  res.render("index", { title: "Login", page: "login" });
}

export function DisplaySignupPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  res.render("index", { title: "Sign Up", page: "signup" });
}

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
