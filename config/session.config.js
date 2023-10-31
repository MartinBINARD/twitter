require("dotenv").config();
const { app } = require("../app");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const mongoose = require("mongoose");

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: false,
      maxAge: parseInt(process.env.AUTH_AGE),
    },
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: parseInt(process.env.AUTH_AGE) / 1000,
    }),
  })
);
