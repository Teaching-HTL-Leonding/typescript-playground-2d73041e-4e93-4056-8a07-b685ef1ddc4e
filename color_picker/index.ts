function setup() {
    createCanvas(500, 300);
    colorMode(HSB);
}

function mouseMoved() {
    background(activeColor, 100, 100);
    activeColor += 5;

    if (activeColor > 360) {
        activeColor = 0;
    }
}
let activeColor = 0;

// let colorPicker = activeColor;

function mouseClicked() {
    fill(colorPicker, 100, 100);
    noStroke();
    rect(0, height - 150, width, height / 2);
}
