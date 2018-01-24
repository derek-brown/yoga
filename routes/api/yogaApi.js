var router = require("express").Router();
var yogaController = require("../../controllers/yogaController");

router.post("/", yogaController.create);
router.get("/", yogaController.read);
router.get("/:id", yogaController.findOne);

module.exports = router;