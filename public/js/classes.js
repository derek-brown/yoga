$(document).ready(function(){

	$.get("/api/class").then(function(data){
		console.log(data);
 });

	$("<div>").addClass("panel panel-default")
   .html(`<div class="panel-heading">
						<h3 class="panel-title text-center">Posts</h3>
   				</div>
   				<div class="panel-body">
   					
   				</div>`).appendTo("#build");
});