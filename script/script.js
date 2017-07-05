// burger menu
$(document).ready(function(){
	$('#nav-icon1').click(function(){
		$(this).toggleClass('open');
	});
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
	dots: false,
	arrows: false,
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

// smooth scroll for anchors
$(function(){
	$('a[href*="#"]:not([href="#"])').click(function(){
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname){
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length){
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
});

