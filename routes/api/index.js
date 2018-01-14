var router = require("express").Router();
var yogaApi = require("./yogaApi");

router.use("/yoga", yogaApi);

module.exports = router;