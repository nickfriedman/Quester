$(function() {
  // Handler for .ready() called.

   $("form").submit(function(event) {
   	event.preventDefault();
   	var q = $(".q").val();
   	$(".q").val("");
   	var a1 = $(".a1").val();
   	$(".a1").val("");
   	var a2 = $(".a2").val();
   	$(".a2").val("");
	$(".questions").prepend("<div><h3>" + q + "</h3><button>" +a1 + "</button><button>" + a2 +"</button></div>");

  // 	console.log("form was submitted");

  // 	$.ajax({
  // 		method: "POST",
  // 		url: "some.php",
  // 		data: $('name').val()
  // 	})
  // 	.done(function(data) {
   		
  // 	});
   });

//   $(".submit").click(function() {
//   	var q = $(".q").val();
//   	var a1 = $(".a1").val();
//   	$(".index").prepend("<div><h3>" + q + "</h3><button>" +a1 + "</button><button></button></div>"
// );
//   });

 $(".menu").click(function() {
 	$(".menu").show();
 });
 $("#Ask").click(function() {
 	$("main").hide();
 	$("aside").show();
 });
 $("#Q").click(function() {
 	$("main").show();
 	$("aside").hide();
 });
});
