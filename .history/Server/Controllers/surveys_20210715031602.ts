import express, { Request, Response, NextFunction } from "express";

// Clothing Model
import Survey from "../Models/Survey";
import SurveyResponse from "../Models/surveyresponse";

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

export function ProcessSurveyPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  let id = req.params.id;
  let newSurveyResponse = new SurveyResponse({
    surveyId: id,
    candidateName: req.body.candidateName,
    q1ResNo: req.body.group1,
    q2ResNo: req.body.group2,
    q3ResNo: req.body.group3,
    q4ResNo: req.body.group4,
    q5ResNo: req.body.group5,
  });
  SurveyResponse.create(newSurveyResponse, (err) => {
    if (err) {
      console.log(err);
      return res.end(err);
    }
  });
  console.log()
  res.redirect("/");
}
