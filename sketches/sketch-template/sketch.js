let bgcolor; // #23272a
let canvas;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    bgcolor = color('#23272a');
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    background(bgcolor);
}
