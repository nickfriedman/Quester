$(function() {
  // Handler for .ready() called.

  	//submitting a question
   $("form").submit(function(event) {
   	event.preventDefault();
   	var q = $(".q").val();
   	$(".q").val("");
   	var a1 = $(".a1").val();
   	$(".a1").val("");
   	var a2 = $(".a2").val();
   	$(".a2").val("");
   	var a3 = $(".a3").val();
   	$(".a3").val("");
    var a4 = $(".a4").val();
   	$(".a4").val("");
   	if (a3 =="" && a4==""){
   		$(".questions").prepend("<div><h3>" + q + "</h3><button>" +a1 + "</button><button>" + a2 +"</button></div>");
   	}
   	else if (a3 == ""){
   		$(".questions").prepend("<div><h3>" + q + "</h3><button>" +a1 + "</button><button>" + a2 +"</button><button>" + a4 +"</button></div>");
   	}
   	else if (a4 == ""){
   		$(".questions").prepend("<div><h3>" + q + "</h3><button>" +a1 + "</button><button>" + a2 +"</button><button>" + a3 +"</button></div>");
   	}
   	else{
		$(".questions").prepend("<div><h3>" + q + "</h3><button>" +a1 + "</button><button>" + a2 +"</button><button>" + a3 +"</button><button>" + a4 +"</button></div>");
	}
	goHome();
  // 	console.log("form was submitted");

  // 	$.ajax({
  // 		method: "POST",
  // 		url: "some.php",
  // 		data: $('name').val()
  // 	})
  // 	.done(function(data) {
   		
  // 	});
   });


 $(".menu li").click(function() {
 	$(this).siblings().toggle();
 });
 $("#Ask").click(function() {
 	$("main").hide();
 	$("aside").show();
 	$("body").scrollTop(0);
 });
 $("#Q").click(function() {
 	goHome();
 });

 //clicking a button
 $("button").click(function() {
 	$(this).siblings('button').hide();
 	$(this).hide();
 	$(this).siblings('.graph').show();
 	$(this).siblings('p').show();
 });

 function goHome(){
 	$("main").show();
 	$("aside").hide();
 	$("body").scrollTop(0);
 }
});
