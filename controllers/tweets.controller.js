const {
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
  res.render("tweets/tweet-form");
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

exports.tweetDelete = async (req, res, next) => {
  try {
    const tweetId = req.params.tweetId;

    await deleteTweet(tweetId);

    /* Render only the tweet list after delete component
    to avoid rendering the entire page */
    const tweets = await getTweets();
    res.render("tweets/tweet-list", { tweets });
  } catch (error) {
    next(e);
  }
};
