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
}

// <<< Add the function `moveClicked` with the required code here
