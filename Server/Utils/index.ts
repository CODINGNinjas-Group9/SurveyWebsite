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
