// burger menu
$(document).ready(function(){
	$('#nav-icon1').click(function(){
		$(this).toggleClass('open');
	});
});

// hide search icon on click
$(document).click(function() {
	$(".header i").show();
});
$(".header input").click(function () {
	$(".header i").hide(100);
});

// display menu
$("#nav-icon1").click(function () {
	$(".header li").hide(100);
	$(".header li").css("display", "block");
	$(".header li").css("width", "320px");
	$(".header li").css("text-align", "center");
	$(".header li").css("background-color", "#fff");
	$(".header li").css("padding", "10 0");
	$(".header ul").css("position", "absolute");
	$(".header ul").css("top", "60");
	$(".header ul").css("right", "0");
	$(".dropdown-content").css("display", "none");
});

// init caroseul
$(document).ready(function () {
	var $s = $('.carousel');
	$s.slick({
	autoplay: true, 
	autoplaySpeed: 1000,
	dots: true,
	arrows: true,
	pauseOnFocus: false,
	pauseOnHover: false,
	}).on("afterChange", function(e, slick) {
		if (slick.currentSlide === 1) {
			$s.slick("setOption", "autoplaySpeed", 7000);
		} else if (slick.currentSlide > 1) {
			$s.slick("setOption", "autoplaySpeed", 4000);
		} else {
			$s.slick("setOption", "autoplaySpeed", 1000);
		}
	});
});

// change symbols for arrows
$(document).ready(function () {
	$(".slick-next").text(">");
	$(".slick-prev").text("<");
});

// init map
function initMap(){
	var uluru = { lat: 49.85304056, lng: 24.02387828 };
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 12,
		scrollwheel: false,
		center: uluru
	});
	var marker = new google.maps.Marker({
		position: uluru,
		map: map
	});
}

// active link and smoothscroll
$(document).ready(function () {
	$(document).on("scroll", onScroll);

	//smoothscroll
	$('a[href^="#"]').on('click', function (e) {
		e.preventDefault();
		$(document).off("scroll");

		$('a').each(function () {
			$(this).removeClass('active');
		})
		$(this).addClass('active');

		var target = this.hash,
			menu = target;
		$target = $(target);
		$('html, body').stop().animate({
			'scrollTop': $target.offset().top+2
		}, 500, 'swing', function () {
			window.location.hash = target;
			$(document).on("scroll", onScroll);
		});
	});
});

function onScroll(event){
	var scrollPos = $(document).scrollTop();
	$('#menu-center a').each(function () {
		var currLink = $(this);
		var refElement = $(currLink.attr("href"));
		if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
			$('#menu-center ul li a').removeClass("active");
			currLink.addClass("active");
		}
		else{
			currLink.removeClass("active");
		}
	});
}