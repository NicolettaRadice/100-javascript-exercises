document.addEventListener('DOMContentLoaded', function() {
	const introContainer = document.querySelector('.intro');
	const videoContainer = introContainer.querySelector('.popout-video');
	const video = videoContainer.querySelector('video');
	let videoHeight = videoContainer.offsetHeight;
	const closeVideoBtn = document.querySelector('.close-video');
	let popOut = true;
	
	introContainer.style.height = `${videoHeight}px`;

	window.addEventListener('scroll', function(e) {
		if (window.scrollY > videoHeight) {
			if (popOut) {
				videoContainer.classList.add('popout-video--popout');
				videoContainer.style.top = `-${videoHeight}px`;
			}
		} else {
			videoContainer.classList.remove('popout-video--popout');
			videoContainer.style.top = `0px`;
			popOut = true;
		}
	});

	closeVideoBtn.addEventListener('click', function() {
		videoContainer.classList.remove('popout-video--popout');
		video.pause();
		popOut = false;
	});
	
	window.addEventListener('resize', function() {
		videoHeight = videoContainer.offsetHeight;
		introContainer.style.height = `${videoHeight}px`;
	});
});