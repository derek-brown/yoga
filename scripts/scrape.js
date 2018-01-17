var axios = require("axios");
var cheerio = require("cheerio");


var scrape = function(){
	return axios.get("https://yogawithkelly.blogspot.com/").then(function(res){
		var $ = cheerio.load(res.data);

		var post = $(this)
								.children(".post-snippet");
								console.log(post);
	});
};

module.exports = scrape;