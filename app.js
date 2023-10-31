const express = require("express");
const morgan = require("morgan");
const path = require("path");
const index = require("./routes");
const errorHandler = require("errorhandler");
require("./database");

const app = express();
const port = process.env.PORT || 3000;

// Connect express server with views folder
app.set("views", path.join(__dirname, "views"));
// Pass pug to express view engine to generate pages
app.set("view engine", "pug");

require("./config/session.config");

/* morgan : middle for terminal logs with short argument who give back this info :
:remote-addr :remote-user :method :url HTTP/:http-version :status :res[content-length] - :response-time ms */
app.use(morgan("short"));
// Connect express server with public folder by default
app.use(express.static(path.join(__dirname, "public")));
// json method to catch data from verb request
app.use(express.json());
// Catch url params during request with extended to pass complex params
app.use(express.urlencoded({ extended: true }));
// Enter point from single file of routess
app.use(index);

console.log(process.env.NODE_ENV);

// Check env variable passed in package.json command to use errorHandler middleware
if (process.env.NODE_ENV === "developement") {
  app.use(errorHandler());
} else {
  app.use((err, req, res, next) => {
    const code = err.code || 500;

    res.status(code).json({
      code: code,
      message: code === 500 ? null : err.message,
    });
  });
}

app.listen(port);
