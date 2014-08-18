$(document).ready(function() {
	var wHeight = $( window ).height();
	$('.post').css('height', (wHeight + 'px'));
    
	arrow();
	function arrow() {
       $('.scroimg').animate({marginTop:'0.3em'}, 800);
       $('.scroimg').animate({marginTop:'0.5em'}, 800, arrow);
    }
});

$(window).resize(function() {
  	var wHeight = $( window ).height();
    console.log(wHeight);
	$('.post').css('height', (wHeight + 'px'));
    console.log((wHeight+'px'));
});

$('.scroimg').click(function() {
    $('html,body').animate({
        scrollTop: $("#main").offset().top},
    'slow');
});