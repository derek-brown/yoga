$(document).ready(function(){
	console.log("Hello world!");
	$.get("/api/scrape").then(function(data){
			console.log(data);
	});
});

