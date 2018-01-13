const router = require("express").Router();
const yogaController = require("../../controllers/yogaController");

// Matches with "/api/yoga"
router.route("/")
  .post(yogaController.create);

// Matches with "/api/yoga/:id"
// router
//   .route("/:id")
//   .get(yogaController.findById)
//   .put(yogaController.update)
//   .delete(yogaController.remove);

module.exports = router;
