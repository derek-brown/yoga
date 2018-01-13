var router = require("express").Router();
var yogaController = require("../../controllers/yogaController");

router.post("/login", yogaController.create);

module.exports = router;