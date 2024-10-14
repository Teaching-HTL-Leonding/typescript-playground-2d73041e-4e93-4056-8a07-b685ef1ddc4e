function setup() {
  createCanvas(500, 500);
  background("black");
  const num = Math.floor(random(0, 4095));

  // Add the necessary code here

  stroke("yellow");
  noFill();
  rect(width / 10.5 * 2.5, height / 3, width / 10, height / 4);
  rect(width / 10.5 * 4, height / 3, width / 10, height / 4);
  rect(width / 10.5 * 5.5, height / 3, width / 10, height / 4);

  let newNum1 = Math.floor(num / 16);
  let newNum2 = Math.floor(newNum1 / 16);
  let newNum3 = Math.floor(newNum2 / 16);


  // Berechungn
  textAlign(CENTER, CENTER);

  text(`${Math.floor((newNum1 % 16))}`, width / 10.5 * 2.5, height / 3, width / 10, height / 4);
  text(`${Math.floor((newNum2 % 16))}`, width / 10.5 * 4, height / 3, width / 10, height / 4);
  text(`${Math.floor((newNum3 % 16))}`, width / 10.5 * 5.5, height / 3, width / 10, height / 4);


  if (num % 16 === 10) {
    fill("black");
    rect(width / 10.5 * 2.5, height / 3, width / 10, height / 4);
    text(`A`, width / 10.5 * 2.5, height / 3, width / 10, height / 4);
  }

  if (num % 16 === 11) {
  fill("black");
  rect(width / 10.5 * 2.5, height / 3, width / 10, height / 4);
  text(`B`, width / 10.5 * 2.5, height / 3, width / 10, height / 4);
}

  if (num % 16 === 12) {
  fill("black");
  rect(width / 10.5 * 2.5, height / 3, width / 10, height / 4);
  text(`C`, width / 10.5 * 2.5, height / 3, width / 10, height / 4);
}

  if (num % 16 === 13) {
  fill("black");
  rect(width / 10.5 * 2.5, height / 3, width / 10, height / 4);
  text(`D`, width / 10.5 * 2.5, height / 3, width / 10, height / 4);
}

  if (num % 16 === 14) {
  fill("black");
  rect(width / 10.5 * 2.5, height / 3, width / 10, height / 4);
  text(`E`, width / 10.5 * 2.5, height / 3, width / 10, height / 4);
}

  if (num % 16 === 15) {
  fill("black");
  rect(width / 10.5 * 2.5, height / 3, width / 10, height / 4);
  text(`F`, width / 10.5 * 2.5, height / 3, width / 10, height / 4);
}


  textAlign(CENTER, CENTER);
  fill("yellow");
  noStroke();
  text(num, width / 2, height - 20);
}