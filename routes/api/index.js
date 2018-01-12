const router = require("express").Router();
const yogaRoutes = require("./yoga");

// yoga routes
router.use("/yoga", yogaRoutes);

module.exports = router;
