$(document).ready(function(){
	var count = 1;
	$(".nav-primary li").each(function(){
		$(this).addClass("nav-" + count);
		count++;
	});
	count = 1;
	$(".nav-drop .drop").each(function(){
		$(this).addClass("drop" + count);
		count++;
	});
});


$(window).load(function(){
	var isiPad = navigator.userAgent.match(/iPad/i) != null;
	var alldrops = $(".drop");
	var allnav = $(".nav-primary li a");
	$(".nav-primary li a").hover(function(){
		var drop = $(".drop" + $(this).parent().attr("class").split('-')[1]);
		if($(drop) != undefined){
			$(alldrops).removeClass("drop-open");
			$(drop).addClass("drop-open");
			$(allnav).removeClass("hovered");
			$(this).parent().find("a").addClass("hovered");
		}
		return false;
	});
	$(".nav-primary li a").click(function(){
		if(isiPad){
			if($(this).hasClass("clicked-once")){
				return true;
			}
			else{
				$(".nav-primary li a").removeClass("clicked-once");
				$(this).addClass("clicked-once");
				return false;
			}
		}
	});
	$("#mast").mouseleave(function(){
		$(alldrops).removeClass("drop-open");
		$(allnav).removeClass("hovered");
	});
});