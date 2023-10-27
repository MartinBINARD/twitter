const router = require("express").Router();
const {
  tweetList,
  tweetNew,
  tweetCreate,
  tweetDelete,
} = require("../controllers/tweets.controller");

// GET LIST
router.get("/", tweetList);
// GET FORM
router.get("/new", tweetNew);
// POST FORM
router.post("/", tweetCreate);
// DELETE TWEET
router.delete("/:tweetId", tweetDelete);

module.exports = router;
