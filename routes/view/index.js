var path = require("path");
var router = require("express").Router();

//if no API routes hit throw this. This will need work
router.get("/", function(req, res){
	res.render("index");
});

router.get("/signUp", function(req, res){
	res.render("signUp");
});

router.get("/adminClass", function(req, res){
	res.render("adminClass");
});

router.get("/classes", function(req, res){
	res.render("classes");
});

module.exports = router;
