const {
  getTweet,
  getTweets,
  createTweet,
  deleteTweet,
} = require("../queries/tweets.queries");

exports.tweetList = async (req, res, next) => {
  try {
    // exec nodejs child_process Transform query result into promise
    const tweets = await getTweets();
    res.render("tweets/tweet", { tweets });
  } catch (error) {
    next(e);
  }
};

exports.tweetNew = (req, res, next) => {
  // Create empty tweet object to prevent tweet is not defined
  res.render("tweets/tweet-form", { tweet: {} });
};

exports.tweetCreate = async (req, res, next) => {
  try {
    const body = req.body;
    // import Mongoose models to transform user form into Mongoose document
    await createTweet(body);
    res.redirect("/tweets");
  } catch (e) {
    const errors = Object.keys(e.errors).map((key) => e.errors[key].message);
    res.status(400).render("tweets/tweet-form", { errors });
  }
};

/* Render only the tweet list after delete component
    to avoid rendering the entire page */
exports.tweetDelete = async (req, res, next) => {
  try {
    const tweetId = req.params.tweetId;
    await deleteTweet(tweetId);
    const tweets = await getTweets();
    res.render("tweets/tweet-list", { tweets });
  } catch (e) {
    next(e);
  }
};

exports.tweetEdit = async (req, res, next) => {
  try {
    const tweetId = req.params.tweetId;
    console.log("tweetId", tweetId);
    const tweet = await getTweet(tweetId);
    console.log("tweet", tweet);

    res.render("tweets/tweet-form", { tweet });
  } catch (e) {
    next(e);
  }
};
