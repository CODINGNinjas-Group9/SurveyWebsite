import express, { Request, Response, NextFunction } from "express";

// Clothing Model
import Survey from "../Models/Survey";

// display page functions
export function DisplaySurveyListPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  // db.clothing.find()
  Survey.find(function (err, surveyCollection) {
    if (err) {
      return console.error(err);
    }

    res.render("index", {
      title: "Survey List",
      page: "survey-list",
      surveys: surveyCollection,
    });
  });
}

export function DisplayEditPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  let id = req.params.id;

  console.log(id);

  Survey.findById(id, {}, {}, (err, surveyItemToEdit) => {
    if (err) {
      console.error(err);
      res.end(err);
    }

    // show the edit page

    res.render("index", {
      title: "Edit",
      page: "edit",
      survey: surveyItemToEdit,
    });
  });
}

export function DisplayAddPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  res.render("index", { title: "Add", page: "edit", survey: "" });
}

export function DisplaySurveyPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  let id = req.params.id;

  Survey.findById(id, {}, {}, (err, survey) => {
    if (err) {
      console.error(err);
      res.end(err);
    }

    // show the survey page

    res.render("index", {
      title: "survey.title",
      page: "survey",
      survey: survey,
    });
  });
}
