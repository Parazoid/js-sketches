class Ship {
    constructor() {
        this.position = createVector(width / 2, height / 2);
        this.velocity = createVector(0, 0);
        this.accel;
        this.bearing = 0; //random(TWO_PI);
        this.shiptext;
    }

    render() {
        push();
        translate(this.position.x, this.position.y);
        rotate(this.bearing);
        noStroke();
        rectMode(CENTER);
        textAlign(CENTER, CENTER);
        fill(255);
        textSize(width / 20);
        text("A", 0, 0);
        stroke(255);
        pop();
        //line(0, 0, this.position.x, this.position.y); //line that points to ship
    }

    animate() {
        this.position.add(this.velocity);
        this.velocity.mult(0.99);
    }

    thrust(direction) {
        this.accel = p5.Vector.fromAngle(this.bearing - PI / 2);
        this.accel.mult(0.1);
        direction == "forward" ? this.velocity.add(this.accel) : this.velocity.sub(this.accel);
    }

    shoot() {}

    collide() {}

    teleport() {
        // TODO
    }
}
