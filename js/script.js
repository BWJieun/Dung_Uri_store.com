$(function(){
	$(".reco> ul> li").click(function(){
		$(this).children(".reco-book").slideToggle();
	});
	$(".reco> ul> li").click(function(){
		$(this).toggleClass("turn");
		
		if($(this).hasClass("turn")===true){
				$(this).siblings().removeClass("turn");
			
		}

	});
});






