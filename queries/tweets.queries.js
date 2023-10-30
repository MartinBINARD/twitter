const Tweet = require("../database/models/tweet.model");

// queries for controller logic : GET CREATE

exports.getTweets = () => {
  return Tweet.find({}).exec();
};

exports.createTweet = (tweet) => {
  const newTweet = new Tweet(tweet);

  return newTweet.save();
};

exports.deleteTweet = (tweetId) => {
  return Tweet.findByIdAndDelete(tweetId).exec();
};

exports.getTweet = (tweetId) => {
  return Tweet.findOne({ _id: tweetId }).exec();
};

/* Modify tweet object + validators entries execution
is not proceed by default during update */

exports.updateTweet = (tweetId, tweet) => {
  return Tweet.findByIdAndUpdate(
    tweetId,
    { $set: tweet },
    { runValidators: true }
  );
};
