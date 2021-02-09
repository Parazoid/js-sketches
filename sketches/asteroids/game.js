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
    background(bgColor);
    if (!gameState) displayMainMenu(1000);
    ship.render();
    ship.animate();
    if (keyIsDown(LEFT_ARROW || A)) ship.bearing -= 0.05;
    if (keyIsDown(RIGHT_ARROW || D)) ship.bearing += 0.05;
    if (keyIsDown(UP_ARROW || W)) ship.thrust("forward");
    if (keyIsDown(DOWN_ARROW || S)) ship.thrust("backward");
    if (ship.bearing >= TWO_PI) ship.bearing = 0;
}

function keyPressed() {
    if (keyCode == 32 && !gameState) {
        // 32 is the code for spacebar;
        gameState = true;
        initializeGame();
    }
}

function displayMainMenu(score) {
    console.log(`Game hasn't initialized. Your score is ${score}`);
}

function initializeGame() {
    console.log("Game initialized!");
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
