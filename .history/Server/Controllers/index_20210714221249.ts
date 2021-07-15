import express, { Request, Response, NextFunction } from "express";

// Display Page Functions

export function DisplayHomePage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  res.render("index", { title: "Home", page: "home" });
}

export function DisplayCreateSurveyPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  res.render("index", { title: "Create Survey", page: "createsurvey" });
}

export function DisplayProjectsPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  res.render("index", { title: "Available Surveys", page: "availablesurveys" });
}

export function DisplayServicesPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  res.render("index", { title: "Login", page: "login" });
}

export function DisplayContactPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  res.render("index", { title: "Sign Up", page: "signup" });
}
