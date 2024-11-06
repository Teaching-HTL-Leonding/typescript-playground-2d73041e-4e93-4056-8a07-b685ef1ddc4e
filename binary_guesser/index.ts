let num = 0;

function setup() {
  num = Math.floor(random(0, 16));

  createCanvas(400, 300);

  background("black");

  stroke("yellow")
  noFill();
  rect(width / 6, height / 3, width / 8, height / 3)
  rect(width / 6 * 2, height / 3, width / 8, height / 3)
  rect(width / 6 * 3, height / 3, width / 8, height / 3)
  rect(width / 6 * 4, height / 3, width / 8, height / 3)
  textAlign(CENTER, CENTER)
  textSize(20)
  fill("yellow");
  text(`What is ${num} in binary`, width / 2, height / 4)

  textAlign(CENTER, CENTER)
  text(`${digi1}`, width / 4.4, height / 3 * 1.5)
  text(`${digi2}`, width / 4.4 * 1.75, height / 3 * 1.5)
  text(`${digi3}`, width / 4.4 * 2.49, height / 3 * 1.5)
  text(`${digi4}`, width / 4.4 * 3.2, height / 3 * 1.5)
}

let digi1 = 0;
let digi2 = 0;
let digi3 = 0;
let digi4 = 0;

function mouseClicked() {
  if (mouseX > width / 6 && mouseX < width / 6 * 2 - 20 && mouseY > height / 3 && mouseY < height / 3 * 2) {
    digi1 = 1;
    fill("black");
    noStroke;
    rect(width / 6, height / 3, width / 8, height / 3)
    fill("yellow");
    text(`${digi1}`, width / 4.4, height / 3 * 1.5)
  }
  if (mouseX > width / 6 * 2 && mouseX < width / 6 * 3 - 20 && mouseY > height / 3 && mouseY < height / 3 * 2) {
    digi2 = 1;
    fill("black");
    noStroke;
    rect(width / 6, height / 3, width / 8, height / 3)
    fill("yellow");
    text(`${digi1}`, width / 4.4, height / 3 * 1.5)
  }
}