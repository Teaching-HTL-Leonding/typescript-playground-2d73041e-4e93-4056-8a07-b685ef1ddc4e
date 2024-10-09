function setup() {
  createCanvas(300, 200);
}

const circleDiameter = 50;

let circlePoseX = 0;
let circlePoseY = 0;
let direction = 2;

// Remember: The _draw_ method is called FOR EVERY FRAME
function draw() {
  background("gold");

  stroke("white");
  strokeWeight(3);
  fill("lime");
  circle(circlePoseX, circlePoseY, circleDiameter);

  circlePoseX += direction;
  circlePoseY += direction;

  //                         +----------------------------- OR operator
  //                         |
  //                         v
  if (circlePoseX >= height || circlePoseX <= 0) {
    // Reverse sign of direction (positive -> right, negative -> left)
    direction *= -1;
  }
}
