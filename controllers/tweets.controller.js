const Tweet = require("../database/models/tweet.model");

exports.tweetList = async (req, res, next) => {
  try {
    // exec nodejs child_process Transform query result into promise
    const tweets = await Tweet.find({}).exec();
    res.render("tweets/tweet-list", { tweets });
  } catch (error) {
    next(e);
  }
};

exports.tweetNew = (req, res, next) => {
  res.render("tweets/tweet-form");
};

exports.tweetCreate = async (req, res, next) => {
  try {
    const body = req.body;
    // import Mongoose models to transform user form into Mongoose document
    const newTweet = new Tweet(body);
    await newTweet.save();
    res.redirect("/");
  } catch (e) {
    const errors = Object.keys(e.errors).map((key) => e.errors[key].message);
    res.status(400).render("tweets/tweet-form", { errors });
  }
};
