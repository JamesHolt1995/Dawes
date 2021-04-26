$( document ).ready(function() {

$('.flexslider').flexslider({
	animation: "fade",
	controlNav: false,
	directionNav: false, 
	slideshow: false,
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



//News ticker
if (screen.width < 480) {

	$("#ticker").eocjsNewsticker();

} else {

	// new kursor({
	// type: 1,
	// color: '#ffffff'
	// });
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

//gsap
let proxy = { skew: 0 },
    skewSetter = gsap.quickSetter(".skewElem", "skewY", "deg"), // fast
    clamp = gsap.utils.clamp(-30, 30); // don't let the skew go beyond 20 degrees. 

ScrollTrigger.create({
  onUpdate: (self) => {
    let skew = clamp(self.getVelocity() / -500);
    // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
    if (Math.abs(skew) > Math.abs(proxy.skew)) {
      proxy.skew = skew;
      gsap.to(proxy, {skew: 0, duration: 0.8, ease: "power3", overwrite: true, onUpdate: () => skewSetter(proxy.skew)});
    }
  }
});

// make the right edge "stick" to the scroll bar. force3D: true improves performance
gsap.set(".skewElem", {transformOrigin: "right center", force3D: true});

});// end of document ready

