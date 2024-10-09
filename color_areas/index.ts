function setup() {
    createCanvas(400, 200);
    background("black");
    noStroke();

    fill("yellow");
    rect(0, 0, width / 3);
    fill("red");
    rect(width / 3, 0, width / 3);
    fill("green");
    rect(width * 2 / 3, 0, width / 3);
}

function mouseClicked() {
    fill("black");
    rect(0, height / 6.6, width);
    textSize(30);
    fill("white");
    textAlign(CENTER);

    if (mouseX < width / 3) {
        text("Yellow", width / 2, height - 30);
    }

    if (mouseX > width / 3 && mouseX < width * 2 / 3) {
        text("Red", width / 2, height - 30);
    }

    if (mouseX > width * 2 / 3) {
        text("Green", width / 2, height - 30);
    }

    fill("yellow");
    rect(0, 0, width / 3);
    fill("red");
    rect(width / 3, 0, width / 3);
    fill("green");
    rect(width * 2 / 3, 0, width / 3);
}
