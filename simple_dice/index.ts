function setup() {
    createCanvas(200, 200);
    background("black");

    // Roll the dice
    const dice = Math.floor(random(1, 7));

    let message: string;
    switch (dice) {
        case 1:
        message = "Eins";
        break;

        case 2:
        message = "Zwei";
        break;

        default:
        message = "Sechs";
        break;
    }

    textAlign(CENTER, CENTER);
    noStroke();
    fill("yellow");
    textSize(50);
    text(message, width / 2, height / 2);
}
