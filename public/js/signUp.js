$(document).ready(function(){
$("#submit").on("click", function(e){
	e.preventDefault();

$.post("/api/yoga", {
 	firstName: $("#firstName").val().trim(),
 	lastName: $("#lastName").val().trim(),
 	email: $("#email").val().trim(),
 	phoneNum: $("#phoneNum").val().trim(),
 }, thanks());

});

	function thanks(){
		alert("Thank you for submitting, "+$("#firstName").val()+"!");
	}
});