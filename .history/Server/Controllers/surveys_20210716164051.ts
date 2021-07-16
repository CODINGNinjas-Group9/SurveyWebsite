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

// display page functions
export function DisplaySurveyListPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  // db.surveycollection.find()
  let today = new Date();
  let day = String(today.getDate()).padStart(2, "0");
  let month = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let year = today.getFullYear();

  let currentDate = year + "-" + month + "-" + day;
  Survey.find(
    {
      validDate: {
        $gte: currentDate,
      },
    },
    function (err, surveyCollection) {
      if (err) {
        return console.error(err);
      }

      res.render("index", {
        title: "Survey List",
        page: "survey-list",
        surveys: surveyCollection,
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
    });
  });
}

export function ProcessEditPage(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  let id = req.params.id;

  console.log(id);

  let updatedSurvey = new Survey({
    _id: id,
    title: req.body.surveytitle,
    validDate: req.body.validity,
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
  Survey.updateOne({ _id: id }, updatedSurvey, {}, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    }
    res.redirect("/survey-list");
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
      title: survey.title,
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
