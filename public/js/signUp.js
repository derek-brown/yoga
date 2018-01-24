$(document).ready(function(){
	$.get("/api/class").then(function(data){
		for(var i=0; i<data.length; i++){
			if(data[i]._id===sessionStorage.class_id){
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
	$.post("/api/yoga", {
	 	firstName: $("#firstName").val().trim(),
	 	lastName: $("#lastName").val().trim(),
	 	email: $("#email").val().trim(),
	 	phoneNum: $("#phoneNum").val().trim(),
	 	classID: sessionStorage.class_id
	 }, thanks());

	});

		function thanks(){
			$.get("/api/class/"+sessionStorage.class_id).then(function(data){
				console.log("Hello");
				alert("Thank you for submitting, "+$("#firstName").val()+"!\n"+
					"You signed up for "+data.classType+"!");
			});
		}
}
});