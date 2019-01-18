// 10 PRINT CHR$(205.5+RND(1)); : GOTO 10
// Javascript implementation of the one-line Commodore 64 BASIC program.

let bgcolor; // #23272a
let canvas;
let linex = 0;
let liney = 0;
const OFFSET = 25;
const CHANCE = 0.5;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    bgcolor = color(35, 39, 42);
    background(bgcolor);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() { // Restarts when mouse is pressed.
    background(bgcolor);
    linex = 0;
    liney = 0;
    loop();
}

function draw() {
    stroke(255);
    strokeWeight(2);
    if (random(1) < CHANCE) { // Forward-Slash or Back-Slash.
        line(linex, liney, linex + OFFSET, liney + OFFSET);
    } else {
        line(linex, liney + OFFSET, linex + OFFSET, liney);
    }
    linex += OFFSET;
    if (linex > width) {
        linex = 0;
        liney += OFFSET;
        if (liney > height) { // Stops the drawings from going off-screen.
            noLoop();
        }
    }
}
