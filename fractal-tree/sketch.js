let ang_slider;
let len_slider;

function setup() {
	
	let height = windowHeight
	let width = windowWidth 
	
	createCanvas(width, height);
	ang_slider = createSlider(0, TWO_PI, PI / 4, 0.02);
	len_slider = createSlider(0, 300, 300, 3)
	ang_slider.position(width / 2, 75);
	len_slider.position((width / 2) - 180, 75)

}

function draw() {

	angle = ang_slider.value();
	leng = len_slider.value();

	stroke(255);
	background(50);
	translate(width / 2, height);
	branch(leng);
	
}

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
  	 stroke(0, 255, 0);
  	 ellipse(0, 0, 2, 2);
  	}
  	
  	
}
