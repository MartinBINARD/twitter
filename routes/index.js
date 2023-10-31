const router = require("express").Router();
const { ensureAuthenticated } = require("../config/guards.config");
const tweets = require("./tweets.routes");
const users = require("./users.routes");
const auth = require("./auth.routes");

// Connect  directly to tweets router to interact with
// use ensureAuthenticated to protect tweets routes
router.use("/tweets", ensureAuthenticated, tweets);
router.use("/users", users);
router.use("/auth", auth);
// redirect default routes to tweet
router.get("/", (req, res) => {
  res.redirect("/tweets");
});

module.exports = router;
