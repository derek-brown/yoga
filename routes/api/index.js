var router = require("express").Router();
var yogaApi = require("./yogaApi");
var scrapeApi = require("./scrapeApi");

router.use("/yoga", yogaApi);
router.use("/scrape", scrapeApi)

module.exports = router;