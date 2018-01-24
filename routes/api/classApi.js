var router = require("express").Router();
var classController = require("../../controllers/classController");

router.post("/", classController.create);
router.get("/", classController.read);

module.exports = router;