// No idea what to do with this.

let data;
let canavs;
let block;

function preload() {
    data = loadJSON("sketch-data.json");

}


function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("blocks-canvas");

}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);

}


function draw() {
    clear();

}
