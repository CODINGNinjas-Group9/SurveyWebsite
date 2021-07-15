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
  res.render("index", { title: "Create Survey", page: "createsurvey" });
}

export function ProcessCreateSurveysPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  let newSurvey = new Survey({
    title: "test Survey",
    creator: "M.Hassan",
    questions: {
      q1: { questionText: "testQ1" },
      q2: { questionText: "testQ2" },
      q3: { questionText: "testQ3" },
      q4: { questionText: "testQ4" },
      q5: { questionText: "testQ5" },
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
