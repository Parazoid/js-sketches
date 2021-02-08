let bgColor; // #23272a
let canvas;
let ship;
let gameState = false;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    bgColor = color("#23272a");
    ship = new Ship();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {
    if (keyCode == ENTER) {
        gameState = true;
        initializeGame();
    }
}

function mousePressed() {
    ship.thrust();
}

function draw() {
    background(bgColor);
    ship.render();
}

function displayMainMenu() {}

function initializeGame() {
    console.log("Game initialized!");
}
