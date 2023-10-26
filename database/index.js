require("dotenv").config();

// mongoose library use async method to connect to data base with user database credentials
const mongoose = require("mongoose");

mongoose
  .connect(
    `mongodb+srv://${process.env.USER_DB}:${process.env.PASSWORD_DB}@cluster0.yxs0hv5.mongodb.net/twitter?retryWrites=true&w=majority`
  )
  .then(() => console.log("connexion db ok !"))
  .catch((err) => console.log(err));
