// Chocolate rain, some stay dry and others feel the pain.
// https://www.youtube.com/watch?v=EwTZ2xpQwpA

let bgcolor; // #23272a
let canvas;
let drops = [];
const AMOUNT = 300;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    bgcolor = color(35, 39, 42);
    for (let i = 0; i < AMOUNT; i++) {
        let x = random(width, -width);
        let y = random(-1000, -2000);
        let z = random(0, 50);
        let yspeed = map(z, 0, 50, 10, 30);
        let len = map(z, 0, 50, 10, 50);
        let alpha = map(z, 0, 50, 255, 10);
        let weight = map(z, 0, 50, 1, 3);
        drops[i] = new Drop(x, y, z, len, yspeed, alpha, weight);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    background(bgcolor);
    translate(width / 2, 0);
    for (let i = 0; i < drops.length; i++) {
        drops[i].show();
        drops[i].fall();
    }
}
