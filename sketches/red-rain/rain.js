// Red rain, it falls!

let bgcolor; // #23272a
let canvas;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    bgcolor = color(35, 39, 42);
    

}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);

}


function draw() {
    background(bgcolor);
    translate(width/2, 0);

}

class Drop {
    constructor() {

    }

}