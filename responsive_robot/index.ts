function setup() {
  createCanvas(400, 200);
  background("lightgray");

  // Define relative sizes and positions based on canvas width and height
  const headWidth = width * 0.50; // Head size as 50% of the canvas width
  const headHeight = height * 0.50; // Head size as 50% of the canvas width
  const headX = width / 2 - headWidth / 2; // Center the head horizontally
  const headY = height / 2 - headHeight / 2; // Center the head vertically

  const mouthPose = width * 0.5 * 0.5 * 1.5;
  const mouthX = headWidth * 0.5;
  const mouthMt = height * 0.5 * 0.5 * 2.3;
  const mouthP = headHeight * 0.1;

  fill("black");
  const eyeX1 = headWidth * 1.25;
  const eyeY1 = height * 1.5 * 0.25;
  const eyeR1 = Math.min(headWidth, headWidth) * 0.2;

  const eyeX2 = headWidth * 0.75;
  const eyeY2 = height * 1.5 * 0.25;
  const eyeR2 = Math.min(headWidth, headWidth) * 0.2;

  const antennaX = width * 0.5;
  const antennaY = height * 0.25;
  const antennaX1 = width * 0.5;
  const antennaY1 = height * 0.25 - headHeight * 0.25;

  const circleX = width * 0.5;
  const circleY = height * 0.1;
  const circleW = eyeR1 * 0.5;

  // Draw the robot's head
  fill("gray");
  rect(headX, headY, headWidth, headHeight);
  fill("white");
  rect(mouthPose, mouthMt, mouthX, mouthP);

  fill("black");
  circle(eyeX1, eyeY1, eyeR1);
  circle(eyeX2, eyeY2, eyeR2);

  fill("white");
  line(antennaX, antennaY, antennaX1, antennaY1);
  circle(circleX, circleY, circleW);

  // Add your code here
}
