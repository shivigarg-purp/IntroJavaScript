let x, y, scale1, sc;
function setup() {
  // Create a canvas that fills the entire browser window
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  triangle(CENTER);
  sc = ["green", "red", "orange", "purple"];

  x = width / 2;
  y = height / 2;
  scale1 = 50;
}

function draw() {
  background(0);

  for (i = 0; i < 20; i += 1) {
    noFill();
    stroke(sc[i % 4]);
    strokeWeight(3);
    let w = i * scale1;
    // print(w);

    if (i % 3 == 0) {
      rect(x, y, w, w);
      if (w > windowWidth) break;
    } else if (i % 3 == 1) {
      circle(x, y, w * sqrt(2));
      
    } else if (i % 3 == 2) {
      triangle(30*i, w, 60*i, w, 90*i, 75);
    }
  }
  //print(i);
}
