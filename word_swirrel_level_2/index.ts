const WIDTH = 500;
const HEIGHT = 300;
const MARGIN = 50;

const wordToGuess = "apple";

function setup() {
  createCanvas(WIDTH, HEIGHT);
  background("black");
  textAlign(CENTER, CENTER);
  colorMode(HSB);
  angleMode(DEGREES);

for(let i = 0; i < wordToGuess.length; i++){
    const x = random(MARGIN, WIDTH - MARGIN);
    const y = random(MARGIN, HEIGHT - MARGIN);
    const rotateAngle = random (-90, 90);
    const fontSize = random(50, 100);
    const textColor = random(0, 360);


    rotate(rotateAngle)
    fill(textColor, 100, 100);

    textSize(fontSize)
    text(wordToGuess[i], x, y);
}

}

function guess(textInput: string) {
  fill("white");

  if (textInput === wordToGuess) {
    background("green");
    textSize(75);
    text("Correct!", WIDTH / 2, HEIGHT / 2);
  } else {
    background("red");
    textSize(50);
    text(`Wrong!\nIt was "${wordToGuess}"`, WIDTH / 2, HEIGHT / 2);
  }
}
