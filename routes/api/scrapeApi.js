var router = require("express").Router();
var scrapeController = require("../../controllers/scrapeController");

router.get("/", scrapeController.scrape);

module.exports = router;
