function setup() {
  createCanvas(500, 500);
  background("black");
  const num = Math.floor(random(0, 10000));

  stroke("yellow");
  noFill();
  rect(width / 3, height / 3, width / 6, height / 4);
  rect(width / 2, height / 3, width / 6, height / 4);
  rect(width / 6, height / 3, width / 6, height / 4);

  let newNum1 = Math.floor(num / 16);
  let remainder1 = num % 16;

  let newNum2 = Math.floor(newNum1 / 16);
  let remainder2 = newNum1 % 16;

  let newNum3 = Math.floor(newNum2 / 16);
  let remainder3 = newNum2 % 16;

  textAlign(CENTER, CENTER);
  // Zeichne die Hexadezimalstellen
  drawHexCharacter(remainder3, width / 6 * 1.2, height / 3);
  drawHexCharacter(remainder2, width / 3 * 1.1, height / 3);
  drawHexCharacter(remainder1, width / 3 * 1.6, height / 3);

  fill("yellow");
  noStroke();
  text(num, width / 2, height - 20);
}

function drawHexCharacter(remainder, x, y) {
  let hexChar;
  if (remainder >= 10) {
    hexChar = String.fromCharCode(55 + remainder);
  } else {
    hexChar = remainder;
  }
  text(hexChar, x, y, width / 10, height / 4);
}

// Darf man das so? Also das man +55 rechnet weil dann ist man ja bei den Buchstaben...Quelle: https://de.wikipedia.org/wiki/Hexadezimalsystem