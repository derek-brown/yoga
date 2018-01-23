$(document).ready(function(){
	$.get("/api/scrape").then(function(data){
		console.log(data);
			$(".panel-body").append("<div><h3 class='text-center'>"+data[0].title+"</h3>"+
															"<p>"+data[0].summary+"</p>"+
															"<a href="+data[0].url+">See More!</div>");
	});
	$.get("/api/emailer").then(function(data){
		console.log(data);
	});
});

