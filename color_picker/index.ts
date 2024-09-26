function setup() {
    createCanvas(500, 300);
    colorMode(HSB);
}

function mouseMoved() {
    background(activeHue, 100, 100);

    if (mouseY) {
        activeSat += 25;
        if (activeHue > 100) {
            activeHue = 0;
        }
    }

    if (mouseX) {
        activeHue += 5;
        if (activeHue > 360) {
            activeHue = 0;
        }
    }
}
let activeHue = 0;
let activeSat = 0;


function mouseClicked() {
    fill(activeHue, activeSat, 100);
    noStroke();
    rect(0, height - 150, width, height / 2);
}
