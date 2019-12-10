let x = 0;
let y = 0;
let prevY = 0;
let angle = 0;
let incSpeed = 0.01;
let scalar = 300;
let direction = 1;
let c;
let peaks = [];
let prevLineX;
let prevLineY;
let counter = 0;
peaks = height;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(150, 150, 150);
  c = color(255, 255, 255);
}

function draw() {
  if (x > width - 1) {
    prevLineX = 0;
    prevLineY = y;
  }
  if (x >= width) {
    x = 0;
    y = y - 100;
  }
  if (y <= height) {
    peaks = height * 0.25;
  }
  x += direction;
  y = noise(angle) * scalar + peaks;
  angle += incSpeed * 2;
  stroke(20, 150, 150);
  line(x, y, x, 0);

  stroke(0);
  line(x, y, x, height);
  stroke(255);
  line(x, y, prevLineX, prevLineY);

  if (prevY > y) {
    prevLineX = x - 1;
    {
      prevLineY = prevLineY - 1;
    }
  }
  if (prevY < y) {
    counter++;
    if (counter > 1) {
      prevLineY = y;
      prevLineX = x;
      counter = 0;
    }
  }
  prevY = y;
  //ellipse(x, y, 5, 5);
}
