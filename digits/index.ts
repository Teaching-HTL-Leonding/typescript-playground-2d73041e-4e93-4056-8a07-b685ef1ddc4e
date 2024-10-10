function setup() {
  createCanvas(500, 500);
  background("black");
  const num = Math.floor(random(0, 1_000_000));

  // Add the necessary code here

  stroke("yellow");
  noFill();
  rect(width / 10.5, height / 3, width / 10, height / 4);
  rect(width / 10.5 * 2.5, height / 3, width / 10, height / 4);
  rect(width / 10.5 * 4, height / 3, width / 10, height / 4);
  rect(width / 10.5 * 5.5, height / 3, width / 10, height / 4);
  rect(width / 10.5 * 7, height / 3, width / 10, height / 4);
  rect(width / 10.5 * 8.5, height / 3, width / 10, height / 4);


  textAlign(CENTER, CENTER);
  text(`${num % 10}`, width / 10.5, height / 3, width / 10, height / 4);
  text(`${num % 10}`, width / 10.5 * 2.5, height / 3, width / 10, height / 4);
  text(`${num % 10}`, width / 10.5 * 4, height / 3, width / 10, height / 4);
  text(`${num % 10}`, width / 10.5 * 5.5, height / 3, width / 10, height / 4);
  text(`${num % 10}`, width / 10.5 * 7, height / 3, width / 10, height / 4);
  text(`${num % 10}`, width / 10.5 * 8.5, height / 3, width / 10, height / 4);

  textAlign(CENTER, CENTER);
  fill("yellow");
  noStroke();
  text(num, width / 2, height - 20);
}
