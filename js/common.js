$(function() {

	$(".main-menu-btn").click(function(){
		$(".main-menu ul").slideToggle();
	});

	$(window).resize(function(){

		var wid = $(window).width();

		if(wid > 767 && $('.main-menu ul').is(':hidden')) {
			$('.main-menu ul').removeAttr('style');
		}

	});

	smoothScroll(".main-menu ul", 500);

	$(".owl-carousel").owlCarousel({
		loop:true,
		responsiveClass:true,
		items:1,
		nav:true,
		navText: false,
		dots: false
	});

	$(".service-btn").mouseover(function() {
		$(this).siblings(".service-title").addClass("active");
	});
	$(".service-btn").mouseout(function() {
		$(this).siblings(".service-title").removeClass("active");
	});

	$(".contact-form").submit(function() {
		if($("#message").val().length < 2) {
			$(".error-msg").show();
			return false;
		}
	});

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});

$(window).on("load", function() {

	$(".loader-wrap").delay(300).fadeOut("slow");

});

function smoothScroll(elem, duration) {
	$(elem + " a").click(function(event) {
		var target = $( $(this).attr('href') );
		var wid = $(window).width();

    	if(wid < 768) {
        	event.preventDefault();
			$(elem).slideToggle();
		}

		if(target.length) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, duration);
		}
	});
}