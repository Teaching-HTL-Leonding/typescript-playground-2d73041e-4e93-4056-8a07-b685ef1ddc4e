const SIZE = 400;  // Canvas size (square)
const MARGIN = 25; // Margin between the edges and the rays. 
// This is also the distance between the rays.

function setup() {
  createCanvas(SIZE, SIZE);
  background("black");

  strokeWeight(1);
  stroke("lightgray");

  let i = MARGIN;            // STEP 1: Initialize the loop variable
  while (i < SIZE) {       // STEP 2: Check the loop condition
    stroke("green");

    line(i, 0, i, SIZE); // STEP 3: Do whatever you want to do repeatedly
    stroke("yellow");
    line(0, i, SIZE, i); // STEP 3: Do whatever you want to do repeatedly
    i += MARGIN;           // STEP 4: Update the loop variable
  }
}

function mouseMoved() {
  background("black");
  strokeWeight(2);

  let i = MARGIN;            // STEP 1: Initialize the loop variable
  while (i < SIZE) {       // STEP 2: Check the loop condition
    stroke("green");

    line(i, MARGIN, mouseX, mouseY); // STEP 3: Do whatever you want to do repeatedly
    line(i, SIZE - MARGIN, mouseX, mouseY)
    stroke("yellow");
    line(MARGIN, i, mouseX, mouseY); // STEP 3: Do whatever you want to do repeatedly
    line(SIZE - MARGIN, i, mouseX, mouseY)
    i += MARGIN;           // STEP 4: Update the loop variable
  }
}
