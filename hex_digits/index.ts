function setup() {
  createCanvas(500, 500);
  background("black");
  const num = Math.floor(random(0, 10000));
  // Add the necessary code here

  stroke("yellow");
  noFill();
  rect(width / 3, height / 3, width / 6, height / 4);
  rect(width / 2, height / 3, width / 6, height / 4);
  rect(width / 6, height / 3, width / 6, height / 4);


  let newNum1 = Math.floor(num / 16);  // Erste Division, gibt den Quotienten
  let remainder1 = num % 16;  // Erster Rest (letzte Hexadezimalstelle)

  let newNum2 = Math.floor(newNum1 / 16);  // Zweite Division
  let remainder2 = newNum1 % 16;  // Zweiter Rest

  let newNum3 = Math.floor(newNum2 / 16);  // Dritte Division (Endwert wird 0)
  let remainder3 = newNum2 % 16;  // Dritter Rest

  textAlign(CENTER, CENTER);
  text(`${Math.floor(remainder3)}`, width / 6 * 1.2, height / 3, width / 10, height / 4);
  text(`${Math.floor(remainder2)}`, width / 3 * 1.1, height / 3, width / 10, height / 4);
  text(`${Math.floor(remainder1)}`, width / 3 * 1.6, height / 3, width / 10, height / 4);

  textAlign(CENTER, CENTER);
  fill("yellow");
  noStroke();
  text(num, width / 2, height - 20);
}