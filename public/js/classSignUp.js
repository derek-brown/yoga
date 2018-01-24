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
   // $("<div>").addClass("panel panel-default")
   // .html(`<div class="panel-heading">
			// 			<h3 class="panel-title text-center"></h3>
   // 				</div>
   // 				<div class="panel-body">
   					
   // 				</div>`).appendTo("#build");
});