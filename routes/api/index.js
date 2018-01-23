var router = require("express").Router();
var yogaApi = require("./yogaApi");
var scrapeApi = require("./scrapeApi");
var emailerApi = require("./emailerApi");

router.use("/yoga", yogaApi);
router.use("/scrape", scrapeApi);
router.use("/emailer", emailerApi);

module.exports = router;