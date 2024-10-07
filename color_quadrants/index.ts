function setup() {
    createCanvas(400, 200);
    background("black");
    noStroke();


    // Color Quadrants
    fill("yellow");
    rect(0, 0, width /2);
    fill("blue");
    rect(0, height /2, width /2);
    fill("green");
    rect(width / 2, 0, width /2);
    fill("red");
    rect(width / 2, height / 2, width /2);

    // Selected Color Display
    fill("black");
    rect(width / 2 * 0.5, height / 2 * 0.5, width / 4);
    rect(width / 2 * 1, height / 2 * 0.5, width / 4);
}

let selectedColor;

function mouseClicked() {


    textAlign(CENTER);
    fill("white");
    text(selectedColor, width / 2 * 0.5, width / 2 * 0.5, height / 2);

    if(mouseX < width / 2 && mouseY < height / 2) {
        selectedColor = "Yellow";
    }
}