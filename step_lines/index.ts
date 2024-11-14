function setup() {
    const SIZE = 400; // Canvas size (square)
    const GRID = 25; // Grid line distance

    createCanvas(SIZE, SIZE);
    background("black");


    let ie = SIZE;

    // Draw vertical lines
    let i = GRID;
    while (i < SIZE) {
        strokeWeight(0.25);
        stroke("lightgray");
        line(i, 0, i, SIZE);
        i += GRID;
    }

    // Draw horizontal lines
    i = GRID;
    while (i < SIZE) {
        strokeWeight(2);
        stroke("yellow");
        line(GRID, i, GRID * (i / GRID), i);
        i += GRID;
        ie -= 5;
    }

    stroke("red");
    i = GRID;
    while (i < SIZE) {
        line(GRID * (i / GRID), i, SIZE - GRID, i);
        i += GRID;
    }
}
