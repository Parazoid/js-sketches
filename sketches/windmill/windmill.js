let bgcolor; // #23272a
let canvas;
let points = [];
let pointnum = 30;

function setup() { // Initial Setup
    canvas = createCanvas(windowWidth, windowHeight);
    bgcolor = color(35, 39, 42);
    for (let i = 0; i < pointnum; i++) {
        points[i] = new Point(random(width-30), random(height-30), 5);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() { // Animation
    background(bgcolor);
    for (let i = 0; i < pointnum; i++) {
        points[i].show();
    }
}

class Point {  
    constructor(_x, _y, _r) {
        this.x = _x;
        this.y = _y; 
        this.r = _r; // Radius
        this.color;
    }
    
    show() {
        ellipse(this.x, this.y, this.r)
        noStroke()
        fill(255)
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