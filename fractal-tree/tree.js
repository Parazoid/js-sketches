// A fractal tree sketch using the p5.js Javascript library.
// Uses recursion.

let ang_slider;
let len_slider;
let leaf;

function setup() {
	
	let height = windowHeight;
	let width = windowWidth;
	
	leaf = color(0, 255, 0); // Leaf Colour.
	
	createCanvas(width, height);
	
	// Creating DOM sliders.
	ang_slider = createSlider(0, 2.60, (PI / 4), 0.02);
	len_slider = createSlider(0, 300, 240, 3);
	ang_slider.position((width / 2), 75);
	len_slider.position((width / 2) - 180, 75);

}

function draw() {

	angle = ang_slider.value();
	leng = len_slider.value();

	stroke(255);
	background(50);
	translate(width / 2, height); // Translates the top centre of the canvas to 0, 0.
	
	branch(leng);
	
}

// Recursive branch function.
function branch(len) {

	line(0, 0, 0, -len);
	translate(0, -len);

	if (len > 6) {
	push();
	rotate(angle);
	branch(len * 0.65);
	pop();
	push();
	rotate(-angle);
	branch(len * 0.65);
	pop();
  	
  	}
  	else {
  	 stroke(leaf);
  	 ellipse(0, 0, 2, 2);
  	}
  	
  	
}
