import express, { Request, Response, NextFunction } from "express";

// Display Page Functions

export function DisplayHomePage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  res.render("index", { title: "Home", page: "home" });
}

export function DisplayAboutPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  res.render("index", { title: "Create Survey", page: "createsurveys" });
}

export function DisplayProjectsPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  res.render("index", { title: "Our Projects", page: "availablesurveys" });
}

export function DisplayServicesPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  res.render("index", { title: "Our Services", page: "services" });
}

export function DisplayContactPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  res.render("index", { title: "Contact Us", page: "contact" });
}
