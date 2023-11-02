require("dotenv").config();

// mongoose library use async method to connect to data base with user database credentials
const mongoose = require("mongoose");

exports.clientPromise = mongoose
  .connect(process.env.DB)
  .then((client) => {
    console.log("connexion db ok !");
    // Pass client and return it for clientPromise resolution in MongoStore

    return client;
  })
  .catch((err) => console.log(err));
