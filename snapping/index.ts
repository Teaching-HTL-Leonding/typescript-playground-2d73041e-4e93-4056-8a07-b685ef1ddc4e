function setup() {
  createCanvas(500, 500);
  background("lightblue");
}

function mouseMoved() {
  const snap = 40; // marker must snap every 40 pixels
  const markerSize = 10; // size of marker

  let poseX = Math.round(mouseX / snap) * snap;
  let poseY = Math.round(mouseY / snap) * snap;

  background("lightblue");

  stroke("white");
  strokeWeight(4);
  line(poseX - markerSize, poseY, poseX + markerSize, poseY);
  line(poseX, poseY - markerSize, poseX, poseY + markerSize);

  fill("lightblue");
  noStroke();
  rect(0, windowHeight - 250, 250, 100);

  fill("white");
  textSize(15);
  text(`X: ${poseX} Y: ${poseY}`, 35, windowHeight - 220);
}
