$(document).ready(function(){
$("#submit").on("click", function(e){
	e.preventDefault();
		$.post("/api/class", {
		 	classType: $("#classType").val().trim(),
		 	classInfo: $("#classInfo").val().trim(),
		 	classDate: $("#classDate").val().trim(),
		}, thanks());
});

	function thanks(){
		alert("Class submited.");
	}
});