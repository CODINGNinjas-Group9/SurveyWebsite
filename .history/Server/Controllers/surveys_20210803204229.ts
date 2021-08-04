/*  File Descripton :-  surveys.ts File containing controllers.
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

// Survey Model
import Survey from "../Models/Survey";
import SurveyResponse from "../Models/surveyresponse";
import { GetName } from "../Utils";

// display page functions
export function DisplaySurveyListPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  Survey.find(
    {
      creator: req.user.username,
    },
    function (err, surveyCollection) {
      if (err) {
        return console.error(err);
      }

      res.render("index", {
        title: "Survey List",
        page: "survey-list",
        surveys: surveyCollection,
        displayName: GetName(req),
      });
    }
  );
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
      page: "updatesurvey",
      survey: surveyItemToEdit,
      displayName: GetName(req),
    });
  });
}

export function ProcessEditPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  let id = req.params.id;

  Survey.findById(id, {}, {}, (err, updatedSurvey) => {
    id = updatedSurvey._id;
    updatedSurvey.title = req.body.surveytitle;
    updatedSurvey.validDate = req.body.validity;
    updatedSurvey.description = req.body.description;
    updatedSurvey.questions.q1.questionText = req.body.q1;
    updatedSurvey.questions.q2.questionText = req.body.q2;
    updatedSurvey.questions.q3.questionText = req.body.q3;
    updatedSurvey.questions.q4.questionText = req.body.q4;
    updatedSurvey.questions.q5.questionText = req.body.q5;

    Survey.updateOne({ _id: id }, updatedSurvey, {}, (err) => {
      if (err) {
        console.log(err);
        res.end(err);
      }
      res.redirect("/survey-list");
    });
  });
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
      title: survey.title,
      page: "survey",
      survey: survey,
      displayName: GetName(req),
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

  res.redirect("/");
}
//Get: Controller to delete a survey
export function ProcessDeleteSurvey(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  let id = req.params.id;
  Survey.deleteOne({ _id: id }, {}, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    }
  });
  SurveyResponse.deleteMany({ surveyId: id }, {}, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    }
  });
  res.redirect("/survey-list");
}

//Get: Process visibility change of a survey
export function ProcessVisibilityChange(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  let id = req.params.id;

  Survey.findById(id, {}, {}, (err, updatedSurvey) => {
    id = updatedSurvey._id;
    updatedSurvey.visibility = !updatedSurvey.visibility;

    Survey.updateOne({ _id: id }, updatedSurvey, {}, (err) => {
      if (err) {
        console.log(err);
        res.end(err);
      }
      res.redirect("/survey-list");
    });
  });
}

//Get: Process visibility change of a survey
export function ShowResultsPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  let id = req.params.id;
  let resultSurvey = null;
  Survey.findById(id, {}, {}, (err, survey) => {
    resultSurvey = survey;
  });
  const responses = [];
  for (let count = 0; count < 5; count++) {
    SurveyResponse.aggregate([
      { $match: { surveyId: id } },
      { $group: { _id: "$q" + count + 1 + "ResNo", total: { $sum: 1 } } },
    ]).exec((err, result) => {
      if (err) console.log(err);
      responses[count] = result;
    });
  }
  console.log(responses[0]);

  res.redirect("/survey-list/");
}
