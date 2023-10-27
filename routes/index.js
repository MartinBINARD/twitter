const router = require("express").Router();
const api = require("./api");
const Tweet = require("../database/models/tweet.model");

// Connect api before render pages in order to interact with
router.use("/api", api);

router.get("/tweet/new", (req, res) => {
  res.render("tweets/tweet-form");
});

router.get("/", (req, res) => {
  // exec nodejs child_process Transform query result into promise
  Tweet.find({})
    .exec()
    .then((tweets) => res.render("tweets/tweet-list", { tweets }));
});

module.exports = router;
