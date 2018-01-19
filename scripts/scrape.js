var axios = require("axios");
var cheerio = require("cheerio");


var scrape = function(){
	return axios.get("https://yogawithkelly.blogspot.com/").then(function(res){
		var $ = cheerio.load(res.data);

		var postArray = [];
		
		$(".post").each(function(i, element){
			var title = $(this)
									.children(".post-title")
									.children("a")
									.text()
									.trim();

			var url = $(this)
									.children(".post-title")
									.children("a")
									.attr("href");

			var summary = $(this)
										.children("snippet-container")
										.children("snippet-item")
										.text()
										.trim();

		var dataToAdd = {
			title: title,
			summary: summary,
			url: url
		};

		postArray.push(dataToAdd);

		});
		return postArray;
	});
};

module.exports = scrape;