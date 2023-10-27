const router = require("express").Router();
const tweets = require("./api.tweets");

// import routes for tweets
router.use("/tweets", tweets);

module.exports = router;
