const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();

const port = process.env.PORT || 3000;
const index = require("./routes");

// Connect express server with views folder
app.set("views", path.join(__dirname, "views"));
// Pass pug to express view engine to generate pages
app.set("view engine", "pug");

/* morgan : middle for terminal logs with short argument who give back this info :
:remote-addr :remote-user :method :url HTTP/:http-version :status :res[content-length] - :response-time ms */
app.use(morgan("short"));
// Connect express server with public folder by default
app.use(express.static(path.join(__dirname, "public")));
// json method to catch data from verb request
app.use(express.json());
// Catch url params during request tiwh extended to pass complex params
app.use(express.urlencoded({ extended: true }));
// Enter point from single file of routess
app.use(index);

app.listen(port);
