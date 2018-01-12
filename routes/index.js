var path = require("path");
var router = require("express").Router();
var apiRoutes = require("./api");

route.use("/api", apiRoutes);

//if no API routes hit throw this. This will need work
route.use(function(req, res){
	res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;