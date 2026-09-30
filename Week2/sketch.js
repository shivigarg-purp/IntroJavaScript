let x, y, d, di;

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(0, 75, 250);
  noStroke();
  x = 0;
  y = 20;
  d = 10;
  di = 0.1;
}

function draw() {
  background(225, 10);

  x += 2.5;
  if (x > windowWidth) x = 0;

  y = y + 10;
  if (y > windowHeight) y = 0;

  // adjust diameter
  d += di;
  if (d > 75 || d < 0) di = -di;
  
  // adjust fill color
  let fc = fill();
  let r = red(fc);
  r += 1;
  if (r > 255) r = 1;
  fc.setRed(r);
  fill(fc);
  
  circle(x, y, d);
}
