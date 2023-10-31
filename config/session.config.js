require("dotenv").config();
const { app } = require("../app");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const { clientPromise } = require("../database");

/*
    Forced to not save session in in MongoStore if session is not modified.
    saveUninitialized is set to false to not keep empty session.
    httpOnly to set the cookie accessible or not for the client
    Created an AUTH_AGE variable to maintain cookies as long as session is avialable
    Added clientPromise for MognoClient connection
*/
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: false,
      maxAge: parseInt(process.env.AUTH_AGE),
    },
    store: MongoStore.create({
      clientPromise: clientPromise.then((m) => m.connection.getClient()),
      ttl: parseInt(process.env.AUTH_AGE) / 1000,
    }),
  })
);
