$(document).ready(function(){
	$(window).scroll(function() {
	    var scroll = $(window).scrollTop();
	    if (scroll >= 1) {
	        $(".me-header").addClass("me-header--affix");
	    } else {
	    	$(".me-header--affix").removeClass("me-header--affix");
	    }
	});

	$('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      	var target = $(this.hash);
	      	target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      	if (target.length) {
	        	$('html,body').animate({
	          		scrollTop: target.offset().top - 54
	        	}, 500);
	        	return false;
	      	}
	    }
	});
});