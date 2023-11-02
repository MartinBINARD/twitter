require("dotenv").config();

// mongoose library use async method to connect to data base with user database credentials
const mongoose = require("mongoose");

exports.clientPromise = mongoose
  .connect(
    `mongodb+srv://${process.env.USER_DB}:${process.env.PASSWORD_DB}@cluster0.yxs0hv5.mongodb.net/twitter?retryWrites=true&w=majority`
  )
  .then((client) => {
    console.log("connexion db ok !");
    // Pass client and return it for clientPromise resolution in MongoStore

    return client;
  })
  .catch((err) => console.log(err));
