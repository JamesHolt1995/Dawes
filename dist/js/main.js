$( document ).ready(function() {

	$('.flexslider').flexslider({
    	animation: "fade",
    	controlNav: false,
    	directionNav: false, 
    	//slideshow: false,
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

	new kursor({
		type: 1,
		color: '#ffffff'
	});

	 //News ticker
    $("#ticker").eocjsNewsticker();

	const dt = new Date();
	const time = dt.getHours() + ":" + dt.getMinutes();
  	document.getElementById("time").innerHTML = time;

	const interval = setInterval(myTimer, 1000);

	function myTimer() {
  		const dt = new Date();
		const time = dt.getHours() + ":" + dt.getMinutes();
  		document.getElementById("time").innerHTML = time;
	}

});// end of document ready

