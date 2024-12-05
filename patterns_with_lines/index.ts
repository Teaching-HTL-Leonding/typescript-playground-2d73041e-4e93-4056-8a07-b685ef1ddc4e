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
    colorMode(HSB)

    resetMatrix();
    background("black");
    strokeWeight(2);
    noFill();

    let color = 0;

    for (let d = 0; d < width; d += 10) {
        translate(d, 0)
        for (let i = 0; i < height; i += 10) {
            stroke(color++, 100, 100);
            line(0, 0 + i, 10, 5 + i)
            line(0, 10 + i, 10, 5 + i)
        }
        resetMatrix()
    }

    fill("black")
    rect(0, height - 20, width)

    textSize(12)
    fill("white")
    noStroke()
    text(`${mouseX} of ${width} = ${Math.floor((mouseX / width) * 100)}%`, 0, height - 9, 150)

}