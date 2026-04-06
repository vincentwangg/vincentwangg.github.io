$(document).ready(function() {
	
	$(window).on('beforeunload', function(){
		$(window).scrollTop(0);
	});

	// Prevent image drag
	$('img').on('dragstart', function(event) { event.preventDefault(); });
	
	function scrollLink(scrollPos) {
		$("html, body").animate({
			scrollTop: scrollPos
		}, 900);
	}
	
	// Auto-scrolling to pages
	$(".link0").click(function() {
		scrollLink($("#main_menu").offset().top)
	});
	
	$(".link1").click(function() {
		scrollLink($("#page1").offset().top + 1)
	});
	
	$(".link3").click(function() {
		scrollLink($("#page3").offset().top + 1)
	});
	
	// Reset navigation bar current page borders
	function resetNavBar() {
		$("#nav_link1, #nav_link3, #nav_link4").removeClass("nav-bar-selected");
	}
	
	// Fade in navigation bar
	$(function () {
		$(window).scroll(function () {
			
			var page0Offset = $("#main_menu").offset().top,
				page1Offset = $("#page1").offset().top,
				page3Offset = $("#page3").offset().top,
				currentScrollPos = $(this).scrollTop();
		
			/*** NAVIGATION BAR VISIBILITY FUNCTIONALITY ***/
			// If scroll position is above about me
			if (currentScrollPos < page1Offset && $("#nav_bar").is(":visible")) {
				$("#nav_bar").fadeOut("fast", function () {
					$("#nav_bar").css("visibility", "hidden");
				});
			}
			// If scroll position is below about me
			if (currentScrollPos >= page1Offset && $("#nav_bar").is(":hidden")) {
				/* Fade in */
				$("#nav_bar").css("visibility", "visible").hide().fadeIn("fast");
			}
			
			/*** NAVIGATION BAR CURRENT PAGE ***/
			if (currentScrollPos >= page1Offset && $("#nav_bar").is(":visible")) {
				resetNavBar();
				$("#nav_link1").addClass("nav-bar-selected");
			}
			if (currentScrollPos >= page3Offset && $("#nav_bar").is(":visible")) {
				resetNavBar();
				$("#nav_link3").addClass("nav-bar-selected");
			}
		}).triggerHandler("scroll");
	});
});