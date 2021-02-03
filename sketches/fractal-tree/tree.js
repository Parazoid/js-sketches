// A recursion based fractal tree sketch.

let bgcolor; // #23272a
let canvas;
let angSlider;
let lenSlider;
let angle;
let leaf;

function setup() {
    canavs = createCanvas(windowWidth, windowHeight);
    bgcolor = color(35, 39, 42);
    leaf = color(0, 255, 0);
    angSlider = createSlider(0, 2.6, PI / 4, 0.02);
    lenSlider = createSlider(0, 300, 200, 3);
    angSlider.position(width / 2, 75);
    lenSlider.position(width / 2 - 180, 75);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    angle = angSlider.value();
    stroke(255);
    background(bgcolor);
    translate(width / 2, height); // Shifts the top middle of the canvas to 0, 0.
    branch(lenSlider.value());
}

function branch(branchLen) {
    line(0, 0, 0, -branchLen);
    translate(0, -branchLen);
    if (branchLen > 6) {
        // Makes sure it doesn't get called infinitely.
        push();
        rotate(angle);
        branch(branchLen * 0.65);
        pop();
        push();
        rotate(-angle);
        branch(branchLen * 0.65);
        pop();
    } else {
        stroke(leaf);
        ellipse(0, 0, 2, 2);
    }

}
