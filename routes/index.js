const router = require("express").Router();
const tweets = require("./tweets");

// Connect  directly to tweets router to interact with
router.use("/tweets", tweets);
// redirect default routes to tweet
router.get("/", (req, res) => {
  res.redirect("/tweets");
});

module.exports = router;
