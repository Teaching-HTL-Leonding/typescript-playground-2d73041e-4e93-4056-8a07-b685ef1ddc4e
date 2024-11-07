let loc1 = 0;
let loc2 = 0;
let loc3 = 0;

let optionNum1;
let optionNum2;
let optionNum3;

let correctNum = 0;
function setup() {
    createCanvas(400, 400);
    background("black");
    optionNum1 = Math.floor(random(0, 100));
    optionNum2 = Math.floor(random(0, 100));
    optionNum3 = Math.floor(random(0, 100));

    let calcNum1 = Math.floor(random(0, 100));
    let calcNum2 = Math.floor(random(0, 100));

    let operator;
    let randomOperator = Math.floor(random(0, 3));

    if (randomOperator === 0) {
        operator = "+";
        correctNum = calcNum1 + calcNum2
    } else if (randomOperator === 1) {
        operator = "-";
        correctNum = calcNum1 - calcNum2
    } else if (randomOperator === 2) {
        operator = "*";
        correctNum = calcNum1 * calcNum2
    }

    textSize(50)
    fill("yellow");
    textAlign(LEFT, CENTER);
    text(`${calcNum1}`, width / 2 * 0.5, height / 4)

    textAlign(CENTER, CENTER);
    text(`${operator}`, width / 2, height / 4)

    textAlign(RIGHT, CENTER);
    text(`${calcNum2}`, width / 2 * 1.5, height / 4)

    loc1 = optionNum1;
    loc2 = optionNum2;
    loc3 = optionNum3;


    let randomLocation = Math.floor(random(0, 3));
    if (randomLocation === 0) {
        loc1 = correctNum;
    } else if (randomLocation === 1) {
        loc2 = correctNum;
    } else if (randomLocation === 2) {
        loc3 = correctNum;
    }
    textAlign(CENTER, CENTER);

    text(`${loc1}`, width / 5, height / 2)
    text(`${loc2}`, width / 5 * 2.5, height / 2)
    text(`${loc3}`, width / 5 * 4, height / 2)
}

function mouseClicked() {
    textAlign(CENTER, CENTER);
    fill("green")
    textSize(50)
    if (correctNum === loc1 && mouseX > width / 20 && mouseX < width / 3) {
        text(`${correctNum} ist richtig!`, width / 2, height / 2 * 1.6)
    }
    if (correctNum === loc2 && mouseX > width / 2.5 && mouseX < width / 1.6) {
        text(`${correctNum} ist richtig!`, width / 2, height / 2 * 1.6)
    }
    if (correctNum === loc3 && mouseX > width / 1.5 && mouseX < width / 1.1) {
        text(`${correctNum} ist richtig!`, width / 2, height / 2 * 1.6)
    }

    else if (optionNum1 === loc1 && mouseX > width / 20 && mouseX < width / 3) {
        fill("red")
        text(`${optionNum1} ist falsch!`, width / 2, height / 2 * 1.6)
    } else if (optionNum2 === loc2 && mouseX > width / 2.5 && mouseX < width / 1.6) {
        fill("red")
        text(`${optionNum2} ist falsch!`, width / 2, height / 2 * 1.6)
    } else if (optionNum3 === loc3 && mouseX > width / 1.5 && mouseX < width / 1.1) {
        fill("red")
        text(`${optionNum3} ist falsch!`, width / 2, height / 2 * 1.6)
    }

}

function mouseMoved() {

    fill("black");
    noStroke();
    rect(0, height - 20, width, height);

    fill("white");
    textSize(10);
    textAlign(LEFT, BOTTOM);
    text(`${mouseX}/${mouseY}`, 5, height - 5);
}
