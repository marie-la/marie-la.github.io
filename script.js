$(document).ready(function () {
	$('.button').mouseenter(function () {
		$(this).animate({opacity:0}, {duration:500, queue:false});
		});
	$('.button').mouseleave(function () {
		var thiselement = $(this);
		if ($(this).is(':animated')) {
			setTimeout(function () {
				thiselement.animate({opacity:1}, {duration:500});
			}, 500);
		} else {
			$(this).animate({opacity:1}, {duration:500});
		}
		
	});
});
