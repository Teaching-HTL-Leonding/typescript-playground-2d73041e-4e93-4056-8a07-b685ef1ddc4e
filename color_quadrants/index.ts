function setup() {
    createCanvas(400, 200);
    background("black");
    noStroke();

    // Color Quadrants
    fill("yellow");
    rect(0, 0, width / 2);
    fill("blue");
    rect(0, height / 2, width / 2);
    fill("green");
    rect(width / 2, 0, width / 2);
    fill("red");
    rect(width / 2, height / 2, width / 2);

    // Selected Color Display
    fill("black");
    rect(width / 2 * 0.5, height / 2 * 0.5, width / 4);
    rect(width / 2 * 1, height / 2 * 0.5, width / 4);
}

let selectedColor;

function mouseClicked() {
    // Check which color is selected
    if (mouseX < width / 2 && mouseY < height / 2) {
        selectedColor = "Yellow";
    }
    if (mouseX > width / 2 && mouseY < height / 2) {
        selectedColor = "Green";
    }
    if (mouseX < width / 2 && mouseY > height / 2) {
        selectedColor = "Blue";
    }
    if (mouseX > width / 2 && mouseY > height / 2) {
        selectedColor = "Red";
    }

    // Clear and update the Selected Color Display
    fill("black");
    rect(width / 2 * 0.5, height / 2 * 0.5, width / 4);
    rect(width / 2 * 1, height / 2 * 0.5, width / 4);

    textAlign(CENTER);
    fill("white");
    textSize(30);
    text(selectedColor, width / 2, height / 2 * 1.1);
}
