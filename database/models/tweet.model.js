const mongoose = resquire("mongoose");
/* tables are defined with schema and connect to remote model "tweet"
from "twitter" collection defined in mongoDB interface */
const schema = mongoose.Schema;

const tweetSchema = schema({
  content: { type: String, maxLength: 140, minLength: 1, required: true },
});

const Tweet = mongoose.model("tweet", tweetSchema);

module.exports = Tweet;
