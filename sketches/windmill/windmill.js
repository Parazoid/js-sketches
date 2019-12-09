let bgcolor; // #23272a
let canvas;
let windowCenter;
let points = []; // Point Array
let pointnum = 60; // Amount of points on the screen.
let mill;
let millAngle;


function setup() { // Canvas Setup
    canvas = createCanvas(windowWidth, windowHeight);
    windowCenter = createVector(width/2, height/2);
    bgcolor = color(35, 39, 42);

    angleMode(DEGREES);

    // for (let i = 0; i < pointnum; i++) {
    //     if (i = 0) {
    //         let pvector1 = createVector(random(-(width/2), width/2), random(-(height/2), height/2));
    //         points[i] = new Point(pvector1.x, pvector1.y, 5);
    //     }
    //     else {
    //         let pvector2 = createVector(random(-(width/2), width/2), random(-(height/2), height/2));
    //         points[i] = new Point(pvector2.x, pvector2.y, 5);
    //         let slope1 = (pvector1.y - pvector2.y) / (pvector1.x - pvector2.x);
    //         let pvector3 = createVector(random(-(width/2), width/2), random(-(height/2), height/2));
    //         let slope2 = (pvector2.y - pvector3.y) / (pvector2.x - pvector3.x);
    //         while (slope1 == slope2) {
    //             pvector2 = createVector(random(-(width/2), width/2), random(-(height/2), height/2));
    //             slope2 = (pvector2.y - pvector3.y) / (pvector2.x - pvector3.x);
    //         }
    //         points[i+1] = new Point(pvector3.x)
    //     }





    mill = new Mill(width*2, 1.5, 0, 0);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() { // Animation
    frameRate(60);
    background(bgcolor);
    translate(windowCenter); // Shifts the (0, 0) origin to the center of the window.
    push();
    // for (let i = 0; i < pointnum; i++) {
    //     points[i].show();
    // }
    pop();
    mill.spin();

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
    constructor(_radius, _speed, _midpoint, _angle) { // Constructor for the line.
        this.angle = _angle;
        this.radius = _radius; // Radius of the "unit circle" which correlates to the length of the line.
        this.vectorA = createVector(round(this.radius*(cos(this.angle))), -round((this.radius*(sin(this.angle)))));
        this.vectorB = createVector(-round((this.radius*(cos(this.angle)))), round(this.radius*(sin(this.angle))));
        this.speed = _speed * 0.25;
        this.midpoint = _midpoint;
        
        this.len = sqrt(sq(this.vectorB.x - this.vectorA.x) + sq(this.vectorB.y - this.vectorA.y)); // Formula for the radiusgth of the line based on pythagorean theorem.
        if (this.vectorA.x != this.vectorB.x) { // If the line isn't vertical
            this.slope = (this.vectorA.y - this.vectorB.y) / (this.vectorA.x - this.vectorB.x); // Calculate slope for line.
            
        }

    }

    show() {
        line(this.vectorA.x, this.vectorA.y, this.vectorB.x, this.vectorB.y);
        stroke(255);
        strokeWeight(3);

    }

    spin() {
        if (this.angle <= 359) {
            this.newAngle = this.angle + this.speed;
            this.vectorA = createVector(round(this.radius*(cos(this.newAngle))), -round((this.radius*(sin(this.newAngle)))));
            this.vectorB = createVector(-round((this.radius*(cos(this.newAngle)))), round(this.radius*(sin(this.newAngle))));
            this.show();
            this.angle = this.newAngle;
        }
        else {
            this.angle = 0;
            this.show();
        }

    }

    pivot() {

    }

}