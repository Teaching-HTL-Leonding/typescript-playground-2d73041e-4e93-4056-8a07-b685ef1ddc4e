function setup() {
    createCanvas(601, 301);
    background("black");

    fill("aqua");
    noStroke();

    textSize(50);
    textAlign(CENTER, CENTER);
    text("Move the mouse to start", 0, 0, width, height);
}

function mouseMoved() {
    resetMatrix();
    background("black");
    strokeWeight(2);

    noFill();
    stroke("aqua");





for(let i = 5; i < height; i += 5)
    line(0, 0, 10, 5 + 5 * 6)
    line(0, 10,10, 5)
    translate(0, 10)
}