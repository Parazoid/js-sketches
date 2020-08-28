// Flowing terrain. Uses perlin noise.
// Made for someone special.
let bgcolor; // #23272a
let canvas;
let cols, rows;
let scl = 25;
let w = 1000;
let h = 1200;

let flying = 0;
let flySlider;

let terrain = [];

function setup() {
    canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    bgcolor = color('#23272a');
    cols = w / scl;
    rows = h / scl;
  
    for (let x = 0; x < cols; x++) {
      terrain[x] = [];
      for (let y = 0; y < rows; y++) {
        terrain[x][y] = 0; //specify a default value for now
      }
    }
    flySlider = createSlider(0.01, 0.4, 0.2, 0.01);
    flySlider.position((windowWidth / 2), 75);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    flying -= flySlider.value();
    let yoff = flying;
    for (let y = 0; y < rows; y++) {
      let xoff = 0;
      for (let x = 0; x < cols; x++) {
        terrain[x][y] = map(noise(xoff, yoff), 0, 1, -100, 100);
        xoff += 0.2;
      }
      yoff += 0.2;
    }

    background(bgcolor);
    translate(0, 50);
    rotateX(PI / 3);
    noFill();
    stroke(143, 3, 140, 40);
    translate(-w / 2, -h / 2);
    for (let y = 0; y < rows - 1; y++) {
      beginShape(TRIANGLE_STRIP);
      for (let x = 0; x < cols; x++) {
        vertex(x * scl, y * scl, terrain[x][y]);
        vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
      }
      endShape();
    }
}
