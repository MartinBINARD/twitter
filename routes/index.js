const router = require("express").Router();
const tweets = require("./tweets.routes");
const users = require("./users.routes");
const auth = require("./auth.routes");

// Connect  directly to tweets router to interact with
router.use("/tweets", tweets);
router.use("/users", users);
router.use("/auth", auth);
// redirect default routes to tweet
router.get("/", (req, res) => {
  res.redirect("/tweets");
});

module.exports = router;
