$(document).ready(function(){

	$.get("/api/class").then(function(data){
		console.log(data);
	if(data.length===0){
		$("#build").append("<h3 class='text-center'>Sorry there are currently no available classes!</h3>");
	}
	else{
		for(var i=0; i<data.length; i++){
			$("<div>").addClass("panel panel-default")
		   .html(`<div class="panel-heading">
								<h3 class="panel-title text-center">${data[i].classType}, ${data[i].classDate}</h3>
		   				</div>
		   				<div class="panel-body">
		   					${data[i].classInfo}
		   				<hr>
		   				<button type="submit" id="submit" data="${data[i]._id}" class="btn btn-primary">Sign Up</button>
		   				</div>`).appendTo("#build");
		};
 	}
	 	$("#submit").on("click", function(f){
	 		f.preventDefault();
			var classID = $(this).attr("data");
			sessionStorage.setItem("class_id", classID);
			console.log(sessionStorage);
			// $.post("/api/yoga")
		window.location.href = "/signUp"
		});
 	});
});