// We declare constants to avoid repeating "magic numbers". 
// These numbers are used for positioning text and icons on the canvas.
// Note that we use all-caps for constants that represent 
// configuration values to make them easy to recognize.
const TEXT_LEFT = 30;
const STONE_LEFT = 50;
const PAPER_LEFT = 175;
const SCISSORS_LEFT = 300;
const ICON_WIDTH = 100;
const ICON_TOP = 75;
const ICON_HEIGHT = 100;

function setup() {
    createCanvas(500, 490);
    background("black");

    fill("yellow");
    textSize(30);
    text("Human:", TEXT_LEFT, 50);

    // Display the icons for "stone", "paper", and "scissors".
    textSize(75);

    text(`🪨`, STONE_LEFT, 75 * 2);
    text(`📃`, PAPER_LEFT, 75 * 2);
    text(`✂️`, SCISSORS_LEFT, 75 * 2);

    textSize(30);
    text(`Computer:`, TEXT_LEFT, 150 * 2);

}


function mouseMoved() {
    if (mouseX >= STONE_LEFT && mouseX <= PAPER_LEFT && mouseY <= 175 && mouseY >= 75) {

        stroke("yellow");
        fill("black");
        rect(STONE_LEFT, 75, 105)
        textSize(75);
        text(`🪨`, STONE_LEFT, 75 * 2);
    }

    if (mouseX >= PAPER_LEFT && mouseX <= SCISSORS_LEFT && mouseY <= 175 && mouseY >= 75) {

        stroke("yellow");
        fill("black");
        rect(SCISSORS_LEFT, 75, 105)
        textSize(75);
        text(`📃`, PAPER_LEFT, 75 * 2);
    }

}