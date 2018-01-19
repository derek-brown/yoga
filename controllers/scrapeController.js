var db = require("../models/Post");
var scrape = require("../scripts/scrape");

module.exports = {
	scrape: function(req, res){
		return scrape()
		.then(function(data){
			return db.Post.create(data);
		})
		.catch(function(err){
			res.json({
				message: "Scrape Complete!!"
			});
		});
	}
};