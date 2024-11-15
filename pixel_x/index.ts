function setup() {
    const SIZE = 425; // Canvas size
    const GRID = 25;  // Size of the squares

    createCanvas(SIZE, SIZE);
    background("black");


    noStroke();

    for(let i = GRID; i < SIZE - GRID; i+= GRID){
        fill("yellow");
        rect(i, i, 25, 25)
    }

    
    for(let i = GRID; i < SIZE - GRID; i += GRID) {
        fill("green");
        rect(i, SIZE - i - 25, 25, 25);
    }

    // <<< Add your code here
}