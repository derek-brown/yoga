var router = require("express").Router();
var yogaApi = require("./yogaApi");
var scrapeApi = require("./scrapeApi");
var emailerApi = require("./emailerApi");
var classApi = require("./classApi");

router.use("/yoga", yogaApi);
router.use("/scrape", scrapeApi);
router.use("/emailer", emailerApi);
router.use("/class", classApi);

module.exports = router;