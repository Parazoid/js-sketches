// Drop Class.

class Drop {
    constructor(x, y, z, len, yspeed, alpha, weight) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.len = len;
        this.x1 = x;
        this.y1 = y;
        this.x2 = this.x1;
        this.y2 = this.y1 + len;
        this.yspeed = yspeed;
        this.alpha = alpha;
        this.weight = weight;
    }

    show() {
        stroke(120, 85, 55, this.alpha); // Chocolate-ish colour, with some alpha.
        strokeWeight(this.weight);
        line(this.x1, this.y1, this.x2, this.y2);
    }

    fall() {
        if (this.y1 < height) {
            this.y1 += this.yspeed;
            this.y2 += this.yspeed;
        }
        else {
            this.y1 = this.y;
            this.y2 = this.y1 + this.len;
        }
    }
}
