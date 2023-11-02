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

/* 
  By declaring key in user model with ref => populate is available
  populate allow to get user object with an objectId
*/

exports.getCurrentUserTweetsWithFollowing = (user) => {
  return Tweet.find({ author: { $in: [...user.following, user._id] } })
    .populate("author")
    .exec();
};

exports.getUserTweetsFromAuthorId = (authorId) => {
  return Tweet.find({ author: authorId }).populate("author").exec();
};
