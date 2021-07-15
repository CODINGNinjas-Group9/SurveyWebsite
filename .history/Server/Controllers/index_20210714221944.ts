import express, { Request, Response, NextFunction } from "express";

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
