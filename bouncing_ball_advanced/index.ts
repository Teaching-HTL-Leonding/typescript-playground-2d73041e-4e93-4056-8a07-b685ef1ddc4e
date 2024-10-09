function setup() {
  createCanvas(300, 200);
}

let circleX;
let circleY;
let circleSize = 50;
let velocity = 2;

function draw() {
  background("yellow")
  circleX ++;
  circleY += velocity;

  fill("red");
  circle(circleX, circleY, circleSize);

}
