function setup() {
  createCanvas(500, 500);
}

function mouseMoved() {
  background("lightblue");

  noFill();
  stroke("black");
  circle(mouseX, mouseY, 30)

  noFill();
  stroke("black");
  circle(mouseX, mouseY, 50)

  stroke("black");
  line(mouseX, mouseY - 35, mouseX, mouseY)
  line(mouseX, mouseY + 35, mouseX, mouseY)
  line(mouseX + 35, mouseY, mouseX, mouseY)
  line(mouseX - 35, mouseY, mouseX, mouseY)
}
