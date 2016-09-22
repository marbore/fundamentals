$(document).ready(function(){
	//alert("Hello jQuery");

	$("#hide").click(function(){
		$("#image").hide();
	});

	$("#show").click(function(){
		$("#image").show();
	});

	$("#fadeIn").click(function(){
		$("#image").fadeIn(5000);
	});

	$("#explode").click(function(){
		$("#image").hide("explode", {pieces: 16}, 5000);
	});

	$("#slideUp").click(function(){
		$("#image").slideUp(2000).slideDown(1000);
	});

	$("#bounce").click(function(){
		$("#image").toggle("bounce", {times:3}, "slow")
	});
});