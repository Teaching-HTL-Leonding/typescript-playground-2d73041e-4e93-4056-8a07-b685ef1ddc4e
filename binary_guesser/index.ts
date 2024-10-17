let num = 0;
let digit1 = 0;
let digit2 = 0;
let digit3 = 0;
let digit4 = 0;

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

}

function mouseClicked() {

  if (mouseX > width / 10.5 * 2.5 && mouseX < width / 10.5 * 4) {
    fill("black");
    rect(width / 10.5 * 2.5, height / 3, width / 10, height / 4);

    if (digit4 === 0) {
      digit4 = 1;
    } else {
      digit4 = 0;
    }

    fill("yellow")
    text(`${digit4}`, width / 10.5 * 3, height / 2.2)
  }

  if (mouseX > width / 10.5 * 4 && mouseX < width / 10.5 * 5.5) {
    fill("black");
    rect(width / 10.5 * 4, height / 3, width / 10, height / 4);

    if (digit3 === 0) {
      digit3 = 1;
    } else {
      digit3 = 0;
    }

    fill("yellow")
    text(`${digit3}`, width / 10.5 * 4.5, height / 2.2)
  }

  if (mouseX > width / 10.5 * 5.5 && mouseX < width / 10.5 * 7) {
    fill("black");
    rect(width / 10.5 * 5.5, height / 3, width / 10, height / 4);
    if (digit2 === 0) {
      digit2 = 1;
    } else {
      digit2 = 0;
    }

    fill("yellow")
    text(`${digit2}`, width / 10.5 * 6, height / 2.2)
  }

  if (mouseX > width / 10.5 * 7.5) {
    fill("black");
    rect(width / 10.5 * 7, height / 3, width / 10, height / 4);
    if (digit1 === 0) {
      digit1 = 1;
    } else {
      digit1 = 0;
    }

    fill("yellow")
    text(`${digit1}`, width / 10.5 * 7.5, height / 2.2)
  }


  if (num === digit4 * Math.pow(2, 3) + digit3 * Math.pow(2, 2) + digit2 * Math.pow(2, 1) + digit1 * Math.pow(2, 0)) {
    fill("green");
    noStroke();
    text("Correct", width / 2, height / 1.3);
  }
}
