import express, { Request, Response, NextFunction } from 'express';
import Survey from '../Models/Survey';

// Display Page Functions

export function DisplayHomePage(req: Request, res: Response, next: NextFunction): void
{
    res.render('index', { title: 'Home', page: 'home' });
}

export function DisplayAboutPage(req: Request, res: Response, next: NextFunction): void
{
    res.render('index', { title: 'About Us', page: 'about'  });
}

export function DisplayProjectsPage(req: Request, res: Response, next: NextFunction): void
{
    let myQs = {
        q1: "testQ1",
        q2: "testQ2",
        q3: "testQ3",
        q4: "testQ4",
        q5: "testQ5",
    };
    let newSurvey = new Survey({
    title: "test Survey",
        creator: "Hassan",
    questions = myQs,
  });
  Survey.create(newSurvey, (err) => {
    if (err) {
      console.log(err);
      return res.end(err);
    }
    res.render('index', { title: 'Our Projects', page: 'projects'  });
}

export function DisplayServicesPage(req: Request, res: Response, next: NextFunction): void
{
    res.render('index', { title: 'Our Services', page: 'services'  });
}

export function DisplayContactPage(req: Request, res: Response, next: NextFunction): void
{
    res.render('index', { title: 'Contact Us', page: 'contact'  });
}