const mongoose = require("mongoose");
/* tables are defined with schema and connect to remote model "tweet"
from "twitter" collection defined in mongoDB interface */
const schema = mongoose.Schema;

// Each tweet belong to user
// foreign key Author with ref user model

const tweetSchema = schema({
  content: {
    type: String,
    maxLength: [140, " Too long tweet"],
    minLength: [1, "Too short tweet"],
    required: [true, "Required field"],
  },
  author: { type: schema.Types.ObjectId, ref: "user", required: true },
});

const Tweet = mongoose.model("tweet", tweetSchema);

module.exports = Tweet;
