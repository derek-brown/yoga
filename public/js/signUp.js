$(document).ready(function(){
	var blogAPI = "https://www.googleapis.com/blogger/v3/blogs/5708692576095399348?key=AIzaSyAYY_7S2suhjQ9Mh3xGKQLFv9t0BT6Yl38";

	$.get(blogAPI, function(data){
		console.log(data.posts.selfLink);
	});
});