//get all the elements first
const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

//set 1 to active
let currentActive = 1;

prev.addEventListener('click', () => {
    //decrement 
	currentActive--;
	
	// keep it in boundaries
	if(currentActive < 1) {
		currentActive = 1;
	}
	
	update();
});

next.addEventListener('click', () => {
    //increment
	currentActive++;
	
	// keep it in boundaries
	if(currentActive > circles.length) {
		currentActive = circles.length;
	}
	
	update();
});

function update() {
	// set and remove active class dependent of the currentActive index
	circles.forEach((circle, idx) => {
		if(idx < currentActive) {
			circle.classList.add('active');
		} else {
			circle.classList.remove('active');
		}
	});
	
	// get all the 'active' circles
	const actives = document.querySelectorAll('.active');
	
	// get the % width for the progress bar
	// remove one from actives and circles in order to have steps like: 0%, 50%, 100%
	progress.style.width = `${(actives.length - 1) / (circles.length - 1) * 100}%`;
	
	if(currentActive === 1) {
		// hide prev
		prev.disabled = true;
	} else if (currentActive === circles.length) {
		// hide next
		next.disabled = true;
	} else {
		// show prev and next
		prev.disabled = false;
		next.disabled = false;
	}
}