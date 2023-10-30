const router = require("express").Router();
const {
  tweetList,
  tweetNew,
  tweetCreate,
  tweetDelete,
  tweetEdit,
} = require("../controllers/tweets.controller");

router.get("/", tweetList);
// Tweet form during tweet creation
router.get("/new", tweetNew);
router.post("/", tweetCreate);
router.get("/edit/:tweetId", tweetEdit);
router.delete("/:tweetId", tweetDelete);

module.exports = router;
