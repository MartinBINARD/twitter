const {
  getTweet,
  getTweets,
  createTweet,
  deleteTweet,
  updateTweet,
  getCurrentUserTweetsWithFollowing,
} = require("../queries/tweets.queries");

/*
  Tweet feed = tweet owend + tweets from user followed
  The key user is for user followed
  When watching other user profile,  his tweets list is displayed
*/
exports.tweetList = async (req, res, next) => {
  try {
    const tweets = await getCurrentUserTweetsWithFollowing(req.user);
    res.render("tweets/tweet", {
      tweets,
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
      user: req.user,
    });
  } catch (e) {
    next(e);
  }
};

exports.tweetNew = (req, res, next) => {
  // Create empty tweet object to prevent tweet is not defined
  res.render("tweets/tweet-form", {
    tweet: {},
    isAuthenticated: req.isAuthenticated(),
    currentUser: req.user,
  });
};

exports.tweetCreate = async (req, res, next) => {
  try {
    const body = req.body;
    // import Mongoose models to transform user form into Mongoose document
    await createTweet({ ...body, author: req.user._id });
    res.redirect("/tweets");
  } catch (e) {
    const errors = Object.keys(e.errors).map((key) => e.errors[key].message);
    res.status(400).render("tweets/tweet-form", {
      errors,
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
    });
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
    const tweet = await getTweet(tweetId);
    res.render("tweets/tweet-form", {
      tweet,
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
    });
  } catch (e) {
    next(e);
  }
};

// If succeed : Update tweet then redirect to tweet list
// In case of error : display tweet and error message

exports.tweetUpdate = async (req, res, next) => {
  const tweetId = req.params.tweetId;
  try {
    const body = req.body;
    await updateTweet(tweetId, body);
    res.redirect("/tweets");
  } catch (e) {
    const errors = Object.keys(e.errors).map((key) => e.errors[key].message);
    const tweet = await getTweet(tweetId);
    res.status(400).render("tweets/tweet-form", {
      errors,
      tweet,
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
    });
  }
};
