function setup() {
    createCanvas(500, 500);
    background("gold");
}

function mouseClicked() {
    fill("red");
    stroke(1);
    circle(mouseX, mouseY, 30);

    fill("gold");
    noStroke();
    rect(50, height - 40, width / 2, 30);
    fill("black");
    text(`X: ${mouseX} | Y: ${mouseY}`, 50, height - 20);
}
