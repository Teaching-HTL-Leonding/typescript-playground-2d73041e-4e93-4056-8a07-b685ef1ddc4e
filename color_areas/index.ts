function setup() {
    createCanvas(400, 200);
    background("black");
    noStroke();

    fill("yellow")
    rect(0, 0, width / 3);
    fill("red")
    rect(width  / 3, 0, width / 3);
    fill("green")
    rect(width * 2 / 3, 0, width / 3);
}


function mouseClicked() {
    textSize(30);
    fill("white");
    textAlign(CENTER);
    if (mouseX < width / 3) {
        text("Yellow", width / 2, height - 30)
    }

    if (mouseX > width / 3 || width < width / 3 * 2) {
        text("Red", width / 2, height - 30)
    } 

    if (mouseX > width / 3 * 2) {
        text("Green", width / 2, height - 30)
    }

}

// c