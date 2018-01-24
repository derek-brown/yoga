$(document).ready(function(){

	var firstName, lastName, email, phoneNum;
	var value = false;

	$.get("/api/class").then(function(data){
		for(var i=0; i<data.length; i++){
			if(data[i]._id===sessionStorage.class_id){
				$("#welcome").html(data[i].classType+", Sign Up");
				signUpReady();
			}
			else{
				alert("Go back and choose a class!");
				window.location.href = "/classes";
			}
		};
	});

function signUpReady(){

	$("#submit").on("click", function(e){
		e.preventDefault();
		if(value){
			return alert("You've already submitted for this class!");
		}else{
			firstName = $("#firstName").val().trim();
	 		lastName = $("#lastName").val().trim();
	 		email = $("#email").val().trim();
	 		phoneNum = $("#phoneNum").val().trim();
	 		value = true;

		$.post("/api/yoga", {
		 	firstName: firstName,
		 	lastName: lastName,
		 	email: email,
		 	phoneNum: phoneNum,
		 	classID: sessionStorage.class_id
		 }, thanks());
		}
	});

	$("#back").on("click", function(g){
		g.preventDefault();
		window.location.href = "/classes";
	});

		function thanks(){
			$.get("/api/class/").then(function(data){
				for(var i=0; i<data.length; i++){
					if(sessionStorage.class_id===data[i]._id){
					$("<div>").addClass("panel panel-default")
		   				.html(`<div class="panel-heading">
								<h3 class="panel-title text-center">${firstName} ${lastName}, you signed up for: ${data[i].classType}, ${data[i].classDate}</h3>
		   				</div>
		   				<div class="panel-body">
		   					${data[i].classInfo}
		   					\n Good luck and have fun!
		   				</div>`).appendTo("#build");
					}
				}
			});
		}
}
});