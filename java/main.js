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
   		$(".questions").prepend("<div><h3>" + q + "</h3><div class='option'><button>" +a1 + "</button><p class='voted'>" + a1 + "</p><div class='voted graph'></div></div><div class='option'><button>" + a2 +"</button><p class='voted'" + a2+ "</p><div class='voted graph'></div></div></div>");
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
	$(".myQ").append("<h3>" + q + "</h3>");
	if (window.innerWidth<1024){
	goHome();
	}
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
 	$(this).children("b").remove();
 	if (($(this).siblings().css('display'))=="none"){
 	$(this).append("<b> V</b>");
 }
 });
 $("#Ask").click(function() {
 	$("main").hide();
 	$(".big").show();
 	$(".myQ").hide();
 	$("body").scrollTop(0);
 });
 $("#Q").click(function() {
 	goHome();
 });
 //Click on Home
 $(".gohome").click(function() {
 	$("myQ").hide();
 	$("main").show();
 	$("body").scrollTop(0);

 });
//Click on my questions
$(".myQheader").click(function() {
	if (window.innerWidth<1024){
		$(".myQ").show();
		$("main").hide();
		$(".big").hide();
	}
	else{
		$(".myQ").show();
		$("main").hide();
		$(".big").show();
	}
	$("body").scrollTop(0);

});
 //clicking a button to vote
 $("button").click(function() {
 	$(this).parent().siblings('div').children('button').hide();
 	$(this).hide();
 	// $(".voted").show();
 	$(this).parent().siblings('div').children('p').show();
 	$(this).parent().siblings('div').children('.graph').css('display', 'inline-block');
 	$(this).siblings("p").show();
 	$(this).siblings(".graph").css('display', 'inline-block');
 	$(this).siblings("div").addClass("win");
 	$(this).parent().append("<i>100%</i>");
 	$(this).parent().siblings('div').children('div').addClass('lose');
 	$(this).parent().siblings('div').append("<i>0%</i>");


 //random graph color
 var colors = ['red', 'blue', 'green', 'orange'];
 var one = Math.floor(Math.random()*4);
 var two = Math.floor(Math.random()*4);
 $(this).siblings("div").css('background', colors[one]);
 while (one ==two){
 	var two = Math.floor(Math.random()*5);
 }
 $(this).parent().siblings('div').children('div').css('background', colors[two]);

});
 function goHome(){
 	$("main").show();
 	$(".big").hide();
 	$(".myQ").hide();
 	$("body").scrollTop(0);
 }
});
