let num = "";          // Current number entered by the user
let lineHeight: number = 0;   // Height of a line of the responsive layout
let cellWidth: number = 0;    // Width of a cell of the responsive layout

function setup() {
    createCanvas(500, 400);
    lineHeight = height / 5;
    cellWidth = width / 3;
}

function draw() {
    background("lightgray");
    textAlign(CENTER, CENTER)
    line(0, height / 5, width, height / 5)
    line(0, height / 5 * 2, width, height / 5 * 2)
    line(0, height / 5 * 3, width, height / 5 * 3)
    line(0, height / 5 * 4, width, height / 5 * 4)

    line(width / 3, height / 5, width / 3, height / 5 * 4)
    line(width / 3 * 2, height / 5, width / 3 * 2, height / 5 * 5)

    fill("white");
    rect(width / 30, height / 60, width * 0.925, height / 6)

    textSize(40);
    fill("black")
    text(`7`, width / 6, height * 1.5 / 5)
    text(`8`, width / 6 * 3, height * 1.5 / 5)
    text(`9`, width / 6 * 5, height * 1.5 / 5)

    text(`4`, width / 6, height / 2)
    text(`5`, width / 6 * 3, height / 2)
    text(`6`, width / 6 * 5, height / 2)

    text(`1`, width / 6, height * 3.5 / 5)
    text(`2`, width / 6 * 3, height * 3.5 / 5)
    text(`3`, width / 6 * 5, height * 3.5 / 5)


    text(`0`, width / 3, height * 4.5 / 5)
    text(`C`, width / 3 * 2.5, height * 4.5 / 5)
    textAlign(RIGHT, CENTER)
    text(`${num}`, width / 1.1, height / 9)
}

function mouseClicked() {
    if (mouseX > 0 && mouseX < width / 3 && mouseY < height / 5 * 2 && mouseY > height / 5) {
        num += "7";
    }
    if (mouseX > width / 3 && mouseX < width / 3 * 2 && mouseY < height / 5 * 2 && mouseY > height / 5) {
        num += "8";
    }
    if (mouseX > width / 3 * 2 && mouseX < width / 3 * 3 && mouseY < height / 5 * 2 && mouseY > height / 5) {
        num += "9";
    }

    if (mouseX > 0 && mouseX < width / 3 && mouseY < height / 5 * 3 && mouseY > height / 5 * 2) {
        num += "4";
    }
    if (mouseX > width / 3 && mouseX < width / 3 * 2 && mouseY < height / 5 * 3 && mouseY > height / 5 * 2) {
        num += "5";
    }
    if (mouseX > width / 3 * 2 && mouseX < width / 3 * 3 && mouseY < height / 5 * 3 && mouseY > height / 5 * 2) {
        num += "6";
    }

    if (mouseX > 0 && mouseX < width / 3 && mouseY < height / 5 * 4 && mouseY > height / 5 * 3) {
        num += "1";
    }
    if (mouseX > width / 3 && mouseX < width / 3 * 2 && mouseY < height / 5 * 4 && mouseY > height / 5 * 3) {
        num += "2";
    }
    if (mouseX > width / 3 * 2 && mouseX < width / 3 * 3 && mouseY < height / 5 * 4 && mouseY > height / 5 * 3) {
        num += "3";
    }

    if (mouseX > 0 && mouseX < width / 3 * 2 && mouseY < height / 5 * 5 && mouseY > height / 5 * 4) {
        num += "0";
    }

    if (mouseX > width / 3 * 2 && mouseX < width / 3 * 3 && mouseY < height / 5 * 5 && mouseY > height / 5 * 4) {
        num = "0";
    }
}