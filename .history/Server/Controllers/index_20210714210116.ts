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
    title: "Amazon Services Survey",
    creator: "M. Hassan",
    questions: {
      q1: {
        questionText:
          "It is easy to find any kind of products on the Amazon website",
      },
      q2: { questionText: "Amazon Prime delivery is faster than I expected" },
      q3: {
        questionText:
          "I feel the ordered product has a good quality and would last long",
      },
      q4: {
        questionText:
          "Delivery agent was taking proper COVID-19 precautionary measures",
      },
      q5: {
        questionText: "I am likely to place more orders at Amazon",
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
