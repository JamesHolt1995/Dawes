$( document ).ready(function() {

//custom cursor for desktop
const cursor = $(".cursor");

$('.flexslider').flexslider({
	animation: "slide",
	controlNav: false,
	directionNav: false, 
	slideshow: true,
	start: function(slider) {
	$('.slides li img', slider).click(function(event){
	    event.preventDefault();
	    slider.flexAnimate(slider.getTarget("next"));
	});
	}
});

$( ".cross" ).click(function() {
  $(this).toggleClass('cross--open');
  $(this).closest('.projects__project').children('.projects__slides').toggleClass('projects__slides--open');
});



$( ".link" ).click(function() {
    $('html, body').animate({
        scrollTop: $("#last").offset().top
    }, 2000);
	//$("body").css("cursor","none");
});


if (screen.width < 480) {

	//News ticker for mobile
	$("#ticker").eocjsNewsticker();

} else {

	document.addEventListener('mousemove', (e) => {
  		$(cursor).css({"top": (e.clientY - 20) + "px", "left": (e.clientX - 20) + "px"});
	});

}

//time
const dt = new Date();
const time = (dt.getHours()==0?'0':'') + dt.getHours() + ":" + (dt.getMinutes()<10?'0':'') + dt.getMinutes();
	document.getElementById("time").innerHTML = time;

const interval = setInterval(myTimer, 1000);

function myTimer() {
	const dt = new Date();
	const time = (dt.getHours()==0?'0':'') + dt.getHours() + ":" + (dt.getMinutes()<10?'0':'') + dt.getMinutes();
	document.getElementById("time").innerHTML = time;
}




});// end of document ready

