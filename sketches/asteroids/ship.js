class Ship {
    constructor() {
        this.position = createVector(width / 2, height / 2);
        this.velocity = createVector(0, 0);
        this.accel = 0;
    }

    render() {
        stroke(255);
        rectMode(CENTER);
        rect(this.position.x, this.position.y, 50, 50);
    }

    thrust() {
        this.position = p5.Vector.add(this.position, this.velocity);
        this.accel = createVector(mouseX, mouseY);
        this.velocity.add(this.accel);
    }
}
