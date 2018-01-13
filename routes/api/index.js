var router = require("express").Router();
var yogaApi = require("./yogaApi");

router.use("/yogaApi", yogaApi);

module.exports = router;