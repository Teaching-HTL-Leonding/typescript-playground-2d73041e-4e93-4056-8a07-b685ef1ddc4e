const MARGIN_NUM = 10;

let num: number = 0;          // Current number entered by the user
let lineHeight: number = 0;   // Height of a line of the responsive layout
let cellWidth: number = 0;    // Width of a cell of the responsive layout

function setup() {
    createCanvas(500, 400);
    lineHeight = height / 5;
    cellWidth = width / 3;
}

function draw() {
    background("lightgray");

    line(0, height / 5, width, height / 5)
    line(0, height / 5 * 2, width, height / 5 * 2)
    line(0, height / 5 * 3, width, height / 5 * 3)
    line(0, height / 5 * 4, width, height / 5 * 4)

    line(width / 3, height / 5, width / 3, height / 5 * 4)
    line(width / 3 * 2, height / 5, width / 3 * 2, height / 5 * 5)

    fill("white");
    rect(0, 0, width, height / 5)

    textSize(40);
    fill("black")
    text(`7`, width / 8, height / 3)
    text(`8`, width / 8 * 3.7, height / 3)
    text(`9`, width / 8 * 6.4, height / 3)

    text(`4`, width / 8, height / 1.9)
    text(`5`, width / 8 * 3.7, height / 1.9)
    text(`6`, width / 8 * 6.4, height / 1.9)

    text(`1`, width / 8, height / 1.4)
    text(`2`, width / 8 * 3.7, height / 1.4)
    text(`3`, width / 8 * 6.4, height / 1.4)
    
    
    text(`0`, width / 8 * 2.4, height / 1.09)
    text(`C`, width / 8 * 6.4, height / 1.09)
}

function mouseClicked() {
    if(mouseX > 0 && mouseX < height / 5) {
        num = 7;
        console.log(num);
    }
}
