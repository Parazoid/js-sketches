let bgcolor; // #23272a
let canvas;
let windowCenter;
let points = []; // Point Array
let pointnum = 3; // Amount of points on the screen.
let mill;
let millAngle;


function setup() { // Canvas Setup
    canvas = createCanvas(windowWidth, windowHeight);
    windowCenter = createVector(width/2, height/2);
    bgcolor = color(35, 39, 42);

    angleMode(DEGREES);

    for (let i = 0; i < pointnum; i++) {
        points[i] = new Point(random(width-30), random(height-30), 5);
    }

    mill = new Mill(height*width, 3, 0, 60);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() { // Animation
    background(bgcolor);
    translate(windowCenter); // Shifts the (0, 0) origin to the center of the window.

    // push();
    // for (let i = 0; i < pointnum; i++) {
    //     points[i].show();
    // }
    // pop();
    // translate(windowCenter.x, windowCenter.y);
    // rotate(angle);
    mill.show();
    mill.spin();
    // resetMatrix();

}

class Point {  
    constructor(_x, _y, _r) {
        
        this.x = _x;
        this.y = _y; 
        this.r = _r; // Radius
        this.color = 255;
    }
    
    show() {

        ellipse(this.x, this.y, this.r)
        noStroke()
        fill(this.color)
    }

}

class Mill {
    constructor(_len, _speed, _midpoint, _angle) {
        this.angle = _angle;
        this.len = _len;
        this.a = createVector(round(this.len*(cos(this.angle))), -round((this.len*(sin(this.angle)))));
        this.b = createVector(-round((this.len*(cos(this.angle)))), round(this.len*(sin(this.angle))));
        this.speed = _speed * 0.25;
        this.midpoint = _midpoint;
        //this.len = sqrt(sq(this.b.x - this.a.x) + sq(this.b.y - this.a.y)); // Formula for the length of the line based on pythagorean theorem.
        // if (this.a.x != this.b.x) {
        //     this.slope = (this.a.y - this.b.y) / (this.a.x - this.b.x);
            
        // }
        // else {
        //     this.millAngle = 35.6
        // }
    }

    show() {
        line(this.a.x, this.a.y, this.b.x, this.b.y);
        stroke(255);
        strokeWeight(3);

    }

    spin() {

        this.newAngle = this.angle - this.speed;
        this.a = createVector(round(this.len*(cos(this.newAngle))), -round((this.len*(sin(this.newAngle)))));
        this.b = createVector(-round((this.len*(cos(this.newAngle)))), round(this.len*(sin(this.newAngle))));
        this.show();
        this.angle = this.newAngle;

    }

    pivot() {

    }

}