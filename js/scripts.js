$(".project-column")
	.hover(

		function(){
			$(this).find(".project-thumbnail").css({
				"filter": "gray",
				"-webkit-filter" : "grayscale(100%)"
			});
		},

		function(){
			$(this).find(".project-thumbnail").css({
				"filter": "none",
				"-webkit-filter" : "none"
			});
	});



$(".project-column")
	.hover(
		function(){
			$(this).find("#floating-box").css({
				"display":"block"
			});
		},
		function(){
			$(this).find("#floating-box").css({
				"display": "none"
			});
		}
	);