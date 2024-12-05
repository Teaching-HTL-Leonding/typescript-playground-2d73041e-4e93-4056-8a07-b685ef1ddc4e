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



    for (let d = 0; d < width; d += 10) {
        translate(d, 0)
        for (let i = 0; i < height; i += 10) {
            line(0, 0 + i, 10, 5 + i)
            line(0, 10 + i, 10, 5 + i)
        }
        resetMatrix()
    }


}