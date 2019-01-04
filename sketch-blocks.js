let data;
let canavs;
let block;

function preload() {
    data = loadJSON("sketch-data.json");
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}


function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("blocks-canvas");

}


function draw() {
    clear();
    ellipse(width/2, height/2, 100);
}
