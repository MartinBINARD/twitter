const router = require("express").Router();
const api = require("./api");

// Connect api before render pages in order to interact with
router.use("/api", api);

router.get("/tweet/new", (req, res) => {
  res.render("tweets/tweet-form");
});

router.get("/", (req, res) => {
  res.render("tweets/tweet-list");
});

module.exports = router;
