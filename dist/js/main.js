$( document ).ready(function() {

//custom cursor for desktop
const cursor = $(".cursor");

$('.flexslider').flexslider({
	animation: "slide",
	controlNav: false,
	directionNav: false, 
	slideshow: true,
	slideshowSpeed: 4000,
	pauseOnHover:true,
	start: function(slider) {
	$('.slides li img', slider).click(function(event){
	    event.preventDefault();
	    slider.flexAnimate(slider.getTarget("next"));
	});
	}
});

$('.flexslider-alt').flexslider({
	animation: "slide",
	controlNav: false,
	directionNav: false, 
	slideshow: true,
	initDelay: 2000,
	slideshowSpeed: 4000,
	pauseOnHover:true,
	start: function(slider) {
	$('.slides li img', slider).click(function(event){
	    event.preventDefault();
	    slider.flexAnimate(slider.getTarget("next"));
	});
	}
});


// open and close project
$( ".cross" ).click(function() {
  $(this).toggleClass('cross--open');
  $(this).closest('.projects__project').children('.projects__dots').toggleClass('projects__dots--open');
  $(this).closest('.projects__project').children('.projects__slides').toggleClass('projects__slides--open');
});



$( ".link" ).click(function() {
	let project = $(this).attr('project');
    $('html, body').animate({
        scrollTop: $(`#${project}`).offset().top - $(".header").innerHeight()
    }, 500);
	//$("body").css("cursor","none");
});


//if mobile ticker if desktop cursor
if (screen.width < 768) {

	//News ticker for mobile
	$("#ticker").eocjsNewsticker();

} else if (screen.width > 1023)  {

	document.addEventListener('mousemove', (e) => {
  		$(cursor).css({"top": (e.clientY - 20) + "px", "left": (e.clientX - 20) + "px"});
	});

	//triangle cursor on projects
	$('.slides img').on({
	  	mouseenter: function () {
	    	cursor.addClass('cursor--tri');
	  	},
	  	mouseout: function () {
	    	cursor.removeClass('cursor--tri');
	  	}
	});


}

$('#about').on("click", function(){
	$('.projects__project').fadeOut();
	$('.projects__project--about').css({'display':'flex','opacity':'1'});
});

$('#works').on("click", function(){
	$('.projects__project').fadeIn();
	$('.projects__project--about').css({'display':'none','opacity':'0'});
});

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

