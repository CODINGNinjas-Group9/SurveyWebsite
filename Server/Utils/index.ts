/*  File Description :-  index.ts File for Authentication
    Website Name :- Survey Ninjas
      Team Name :- CodingNinjas

        Anureet Kaur - 301174444
        Mridula Ramakrishnan - 301145813
        Muhammad Hassan - 301178235
        Nilam Keshwala - 301042029
        Raghuveer Manam - 300715775
        Roshna Raju - 301174285

        Date: 30th July 2021
*/

import express, { Request, Response, NextFunction } from "express";

//name display when logged in
export function GetName(req: Request): string {
  if (req.user) {
    let user = req.user as UserDocument;
    return user.displayName.toString();
  }
  return "";
}
//Authentication access control function
export function AuthGuard(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  if (!req.isAuthenticated()) {
    return res.redirect("/login");
  }
  next();
}
