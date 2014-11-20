// JavaScript Document
var menuOffset;
var topOffset;

$(document).ready(function(){
topOffset = $('.scrollTrack').height();

attachMobileNav();
bodyCloseMenu();

$(window).scroll(function() {
		topOffset = $('.scrollTrack').height();
    var docScroll = $(document).scrollTop();

    if (docScroll>= topOffset) {
        $('.navigation-bar').addClass('fixed');
    } else {
        $('.navigation-bar').removeClass('fixed');            
    }
});
});

function attachMobileNav()
{
$(".mobile-button").on("click", function(e){
		if($(".navigation-bar").css("display")=="none")
		{
			$(".navigation-bar").css("display", "block");
			console.log("hidden");
		}
		else
		{
			$(".navigation-bar").css("display", "none");
			
			console.log("visible");
		}
		e.stopPropagation();
		});
}





function bodyCloseMenu()
{
$("html").on("click",function(){
$(".navigation-bar").css("display", "none");
});

}