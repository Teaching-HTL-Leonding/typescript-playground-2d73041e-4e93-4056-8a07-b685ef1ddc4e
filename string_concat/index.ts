let clickProtocol = "0/0";

function setup() {
  createCanvas(500, 500);
  background("lightblue");
  textSize(15);
  text(clickProtocol, 20, 20, 460, 460);
} 

function mouseClicked() {
  noStroke();
  fill("cyan");
  circle(mouseX, mouseY, 20);

  clickProtocol += `, ${mouseX}/${mouseY}`;

  fill("black");
  text(clickProtocol, 20, 20, 460, 460);
}
