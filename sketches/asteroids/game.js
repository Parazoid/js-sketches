let bgColor; // #23272a
let canvas;
let ship;
let gameState = false;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    bgColor = color("#23272a");
    background(bgColor);

    ship = new Ship();
}

function draw() {
    if (!gameState) displayMainMenu();
}

function keyPressed() {
    if (keyCode == 32 && !gameState) {
        // 32 is the code for spacebar;
        gameState = true;
        initializeGame();
    }
}

function displayMainMenu() {
    console.log("Game hasn't initialized.");
}

function initializeGame() {
    console.log("Game initialized!");
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
