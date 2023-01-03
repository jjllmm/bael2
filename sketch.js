var dAmt = 1000;

function setup() {
  createCanvas(1920, 1080);
  background(0);
  noStroke();
  
  fill('white');
  for (var i = 0; i < dAmt; i++){
    var al = random (30, 255);
    var r_col = random (150,255);
    var g_col = random (150, 255);
  	var y = random(0, height);
    var x = random(0, width);
    var r = random(3,10);
    fill(r_col, g_col, 0, al);
    ellipse(x, y, r, r);
  }
  
}

function draw() {

}