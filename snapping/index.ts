function setup() {
  createCanvas(500, 500);
  background("lightblue");
}

function mouseMoved() {
  const snap = 40; // marker must snap every 40 pixels
  const markerSize = 10; // size of marker

  let poseX = mouseX * Math.round(3.6)

  background("lightblue");

  stroke("white");
  strokeWeight(4);
  line(mouseX - 15, mouseY, mouseX + 15, mouseY);
  line(mouseX, mouseY - 15, mouseX, mouseY + 15);
}
