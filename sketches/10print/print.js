// 10 PRINT CHR$(205.5+RND(1)); : GOTO 10
// Javascript implementation of the one-line Commodore 64 BASIC program.

let bgcolor; // #23272a
let canvas;
let linex = 0;
let liney = 0;
let offset = 25;
let chance = 0.5;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    bgcolor = color(35, 39, 42);
    background(bgcolor);

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);

}

function mousePressed() {
    background(bgcolor);
    linex = 0;
    liney = 0;
}

function draw() {
    stroke(255);
    strokeWeight(2);

    if (random(1) < chance) {
        line(linex, liney, linex + offset, liney + offset);
    } else {
        line(linex, liney + offset, linex + offset, liney);
    }
    linex += offset;
    if (linex > width) {
        linex = 0;
        liney += offset;
        if (liney > height) {
            noLoop();
        }
    }

}
