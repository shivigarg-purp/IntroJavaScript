var x = 1;
var y = 50;
var z = 75;
var speed = 2;

let cellArray = [];

function setup() {
  createCanvas(500, 500);
  background(0);
  frameRate(32);

  stroke(255);
  line(500 / 3, 0, 500 / 3, 500);
  line((500 * 2) / 3, 0, (500 * 2) / 3, 500);
  line(0, 500 / 3, 500, 500 / 3);
  line(0, (500 * 2) / 3, 500, (500 * 2) / 3);

  for (let i = 0; i < 9; i += 1) {
    let c = new Cell(i);
    cellArray.push(c);
  }
}

class Cell {
  constructor(cellnumber) {
    this.cellnumber = cellnumber;
    this.x = (this.cellnumber % 3) * (500 / 3) + 500 / 6;
    this.y = floor(this.cellnumber / 3) * (500 / 3) + 500 / 6;
    this.originalX = this.x;
    this.originalY = this.y;
  }
  draw() {
    this.c = random(["darkorange", "darkred", "orange", "darkgreen", "red"]);
    stroke(this.c);
    point(this.x, this.y);
  }
  hop() {
    let hopDistance = 15;
    let xHop = floor(random(-1 * hopDistance, hopDistance));
    this.x = this.originalX + xHop;
    let yHop = floor(random(-1 * hopDistance, hopDistance));
    this.y = this.originalY + yHop;
  }
}

function draw() {
  //background(255);
  stroke("#fae");
  strokeWeight(5);
  triangle(x, 150, x, 180, y, 165);
  x = x + speed;
  y = y + speed;
  if (y > width || x < 0) {
    speed = speed * -1;
  }
  strokeWeight(5);


  strokeWeight(floor(random(75)));
  let cellnumber = floor(random(0, 9));
  //print(str(cell));

  let cell = cellArray[cellnumber];
  cell.draw();
  cell.hop();
}
