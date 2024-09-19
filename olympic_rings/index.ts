function setup() {
  createCanvas(400, 200);
  noFill(); // We only need the outlines
  strokeWeight(10); // Set the thickness of the ring outlines

  // We want to use degrees, not rad. Want to learn more?
  // https://brilliant.org/wiki/degrees-radian/
  angleMode(DEGREES);

  // Part of blue ring
  stroke("blue");
  //                    +-------- start angle
  //                    |   +---- end angle
  //                    v   v
  arc(100, 100, 80, 80, 45, 315);

  // Parts of black ring
  stroke("black");
  arc(200, 100, 80, 80, 135, 315);
  arc(200, 100, 80, 80, 45, 90);


  stroke("green");
  arc(250, 140, 80, 80, 275, 45);

  stroke("green");
  arc(250, 140, 80, 80, 45, 300);

  stroke("red");
  arc(300, 100, 80, 80, 90, 130);

  // Part of red ring
  stroke("red");
  arc(300, 100, 80, 80, 135, 90);

  // Gold ring
  stroke("gold");
  circle(150, 140, 80);

  // Another part of black ring
  stroke("black");
  arc(200, 100, 80, 80, 90, 135);

  // Blue ring
  stroke("blue");
  arc(100, 100, 80, 80, 315, 45);

  // Last part of black ring
  stroke("black");
  arc(200, 100, 80, 80, 315, 45);
}
