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

		if (title && summary && url) {
        var title = title.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
        var summary = summary.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();

       
       var dataToAdd = {
          title: titleClean,
          summary: summaryClean,
          url: url
        };

		postArray.push(dataToAdd);
		}
		});
		return postArray;
	});
};

module.exports = scrape;