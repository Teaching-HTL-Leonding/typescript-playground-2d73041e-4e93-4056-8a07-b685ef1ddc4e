let num = 0;

function setup() {
  num = Math.floor(random(0, 16));

  createCanvas(400, 300);
  background("black");

  fill("yellow")
  textAlign(CENTER, CENTER)
  text(`${num} in binary`, width / 2, height / 4)

  stroke("yellow");
  noFill();
  rect(width / 10.5 * 2.5, height / 3, width / 10, height / 4);
  rect(width / 10.5 * 4, height / 3, width / 10, height / 4);
  rect(width / 10.5 * 5.5, height / 3, width / 10, height / 4);
  rect(width / 10.5 * 7, height / 3, width / 10, height / 4);

  text(`0`, width / 10.5 * 3, height / 2.2);
  text(`0`, width / 10.5 * 4.5, height / 2.2);
  text(`0`, width / 10.5 * 6, height / 2.2);
  text(`0`, width / 10.5 * 7.5, height / 2.2);


  // text(`${Math.floor(num / 8 % 2)}`, width / 10.5 * 2.5, height / 3,)
  // text(`${Math.floor(num / 4 % 2)}`, width / 10.5 * 4, height / 3)
  // text(`${Math.floor(num / 2 % 2)}`, width / 10.5 * 5.5, height / 3)
  // text(`${Math.floor(num % 2)}`, width / 10.5 * 7, height / 3)

}

function mouseClicked() {

  if (mouseX > width / 10.5 * 2.5 && mouseX < width / 10.5 * 4) {
    fill("black");
    rect(width / 10.5 * 2.5, height / 3, width / 10, height / 4);
    fill("yellow")
    text(`${Math.floor(num / 8 % 2)}`, width / 10.5 * 3, height / 2.2)
  }

  if (mouseX < width / 10.5 * 4 && width / 10.5 * 5.5) {
    fill("black");
    rect(width / 10.5 * 4, height / 3, width / 10, height / 4);
    fill("yellow")
    text(`${Math.floor(num / 8 % 2)}`, width / 10.5 * 3, height / 2.2)
  }

}
