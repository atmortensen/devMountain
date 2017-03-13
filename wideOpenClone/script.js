
$("#menuDrop").click(function(){
	$("nav ul").slideToggle();
});

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if(scroll<10){
    	$("nav").addClass("navTop");
    }else{
    	$("nav").removeClass("navTop");
    }
});