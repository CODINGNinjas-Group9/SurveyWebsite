/*  File Descripton : - app.ts error handler File 
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

import createError from "http-errors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import mongoose, { mongo } from "mongoose";
// imports for authentication
import session from "express-session";
import passport from "passport";
import passportLocal from "passport-local";
let strategy = passportLocal.Strategy;
//import cors and flash
import cors from "cors";
import flash from "connect-flash";
// import the index router and inject a reference here
import indexRouter from "../Routes/index";
import surveyListRouter from "../Routes/survey-list";

// Express Web App Configuration
const app = express();

export default app; // exports app as the default Object for this module
import User from "../Models/user";
// DB Configuration
import * as DBConfig from "./db";
mongoose.connect(DBConfig.RemoteURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection; // alias for the mongoose connection
db.on("error", function () {
  console.error("connection error");
});

db.once("open", function () {
  console.log(`Connected to MongoDB at: ${DBConfig.HostName}`);
});

app.use(
  session({
    secret: DBConfig.mySecret,
    saveUninitialized: false,
    resave: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
passport.use(User.createStrategy());

//Serialize and Deserialize User object
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(flash());
// view engine setup
app.set("views", path.join(__dirname, "../Views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../../Client")));
app.use(express.static(path.join(__dirname, "../../node_modules")));

// perform routing
app.use("/", indexRouter);
app.use("/survey-list", surveyListRouter); // create a separate "area" of our web application
//authentication configuration and initialization
app.use(cors);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (
  err: createError.HttpError,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

//module.exports = app;
