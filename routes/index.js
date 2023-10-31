const router = require("express").Router();
const tweets = require("./tweets.routes");
const user = require("./users.routes");

// Connect  directly to tweets router to interact with
router.use("/tweets", tweets);
router.use("/users", users);
// redirect default routes to tweet
router.get("/", (req, res) => {
  res.redirect("/tweets");
});

module.exports = router;
