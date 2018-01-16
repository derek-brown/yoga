$(document).ready(function() {
 
$(document).on("click", "#submit", function(e) {
	e.preventDefault();
	$.post("/api/yoga", {
 	firstName: $("#firstName").val().trim(),
 	lastName: $("#lastName").val().trim(),
 	email: $("#email").val().trim(),
 	password: $("#password").val().trim(),
 }, thanks());
});

	function thanks(){
		alert("Thank you for submitting, "+$("#firstName").val()+"!");
		$.get("/api/yoga", function(data) {
			for(var i=0; i<data.length; i++){
				$("#build").append("<p>Thank you, "+data[i].firstName+". </p>");
			}
		});	
	}

	
});