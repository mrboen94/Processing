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
let prevLineXLight;
let prevLineYLight;
let counter = 0;
let prevX;
let prevPrevX;
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
    prevLineXLight = 0;
    prevLineYLight = y;
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

  stroke(100);
  line(x, y, x, height);
  stroke(40);
  if (x > prevPrevX) {
    line(x, y, prevPrevX - (prevPrevX - prevLineXLight), prevLineYLight);
  }
  stroke(255);
  line(x, y, prevLineX, prevLineY);
  if (prevY > y) {
    prevLineX = x - 1;
    prevLineY = prevLineY - 2 * noise();
    prevLineXLight = x - 1;
    prevLineYLight = prevLineYLight - random(noise(-10) * -4, noise(10) * 2);
  }

  if (prevY < y) {
    counter++;
    if (counter > 1) {
      prevLineY = y;
      prevLineX = x;
      prevLineXLight = x;
      prevLineYLight = y;
      counter = 0;
    }
  }
  prevY = y;
  prevPrevX = prevX;
  prevX = x;
  //ellipse(x, y, 5, 5);
}
