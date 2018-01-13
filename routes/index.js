var path = require("path");
var router = require("express").Router();
var apiRoutes = require("./api");

router.use("/api", apiRoutes);

//if no API routes hit throw this. This will need work
router.use(function(req, res){
	res.render("index");
});

module.exports = router;