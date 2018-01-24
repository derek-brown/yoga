$(document).ready(function(){

	$.get("/api/class").then(function(data){

	for(var i=0; i<data.length; i++){
		$("</div>").addClass("panel panel-default")
	   .html(`<div class="panel-heading">
							<h3 class="panel-title text-center">${data[i].classType}, ${data[i].classDate}</h3>
	   				</div>
	   				<div class="panel-body">
	   					${data[i].classInfo}
	   				</div>`).appendTo("#build");
 	};
 });
});