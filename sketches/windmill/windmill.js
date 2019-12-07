let bgcolor; // #23272a
let canvas;

function setup() { // Initial Setup
    canvas = createCanvas(windowWidth, windowHeight);
    bgcolor = color(35, 39, 42);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() { // Animation
    background(bgcolor);
}

class Dot {  
    constructor() {
        this.x;
        this.y; 
        this.r; // Radius
        this.color;
    }
    
    show() {

    }


}

class Mill {
    constructor() {
        this.x;
        this.y
        this.len;
        this.color;

    }

    show() {

    }

    pivot() {

    }
    
}