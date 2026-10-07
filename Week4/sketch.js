function setup() {
  createCanvas(500, 500);

  // Slow the frame rate.
  frameRate(5);

}

function draw() {
//  background(100);
  strokeWeight(5);
  //stroke('black');
  drawlines();
  strokeWeight(floor(random(100)));
  let cell = floor(random(0,9));
  //print(str(cell));
  let x= (cell%3)*(500/3)+(500/6);
  //print(x);
  let y= (floor(cell/3))*(500/3)+(500/6);
 // print(y);
 let c= random(['darkorange', 'darkred', 'pink', 'purple', 'lavender']);

  stroke(c);
//  print(c)
  point(x,y);
}
function drawlines(){
  line(500/3, 0, 500/3, 500);
  line(500*2/3, 0, 500*2/3, 500);
  line (0,500/3, 500, 500/3);
  line (0,500*2/3, 500, 500*2/3);

}