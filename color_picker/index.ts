function setup() {
    createCanvas(500, 300);
}

function mouseMoved() {
    colorMode(HSB);
    fill(activeHue, activeSat, 100);
    noStroke();
    rect(0, 0, width, height / 2);


    if (mouseY) {
        activeSat += 1;
        if (activeHue > 100) {
            activeHue = 0;
        }
    }

    if (mouseX) {
        activeHue += 2;
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