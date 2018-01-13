var router = require("express").Router();
var yogaController = require("../../controllers/yogaController");

router.post("/api/yoga", yogaController.create);

module.exports = router;