function setup() {
    createCanvas(500, 500);
    frameRate(60);
}

let x = 10;
let direction = 5;

function draw() {
    background("black");
    circle(width / 2, height / 2, x);
    x += direction;

    if (x >= width) {
        direction = -5;
    }

    if (x <= 0) {
        direction = +5;
    }
}