const leftPaddleX = 100;
let leftPaddleY = 100;
const paddleWidth = 40;
const paddleHeight = 100;
const ballSize = 40;

function setup() {
  createCanvas(400, 400);
  // Switch p5 to draw rectangles from their center
}

function draw() {
  background(0);
  let ballPosX = mouseX;
  let ballPosY = mouseY;
  // If ball is colliding with paddle
  // switch fill color to red
  // Otherwise
  // switch fill color to white
  rect(leftPaddleX, leftPaddleY, paddleWidth, paddleHeight);
  square(ballPosX, ballPosY, ballSize);
}
