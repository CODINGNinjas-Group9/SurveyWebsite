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

export function DisplayAboutPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  res.render("index", { title: "About Us", page: "about" });
}

export function DisplayProjectsPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  let newSurvey = new Survey({
    title: "Walmart Customer Satisfaction Survey",
    creator: "M.Hassan",
    questions: {
      q1: {
        questionText:
          "Products price at Walmart is always better than other super stores.",
      },
      q2: { questionText: "It is easy to find the desired item at the store" },
      q3: { questionText: "It is easy to get refunded for unwanted products" },
      q4: {
        questionText:
          "Staff is always trying to provide amazing customer service",
      },
      q5: {
        questionText: "I would recommend Walmart to friends and family members",
      },
    },
  });
  Survey.create(newSurvey, (err) => {
    if (err) {
      console.log(err);
      return res.end(err);
    }
  });
  res.render("index", { title: "Our Projects", page: "projects" });
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
