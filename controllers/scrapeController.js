const db = require("../models");
var scrape = require("../scripts/scrape");

module.exports = {
	scrape: function(req, res){
		return scrape()
		.then(function(data){
			res.json(data);
		})
		.catch(function(err){
			console.log(err);
			res.json({
				message: "Scrape Complete!!"
			});
		});
	}
};