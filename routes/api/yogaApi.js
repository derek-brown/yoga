var router = require("express").Router();
var yogaController = require("../../controllers/yogaController");

router.post("/", yogaController.create);
router.get("/", yogaController.read);

module.exports = router;