var spr;
function setup() {
  createCanvas(500, 400);
  spr = createSprite(
    200, 200, 25,25);
  spr.shapeColor = color('black');
}
function draw() {
  background('gray');
  
  noStroke();
  textAlign(CENTER, CENTER);
  stroke('blue');
  strokeWeight(18);
  text("use arrow keys, or SPACE to stop",
    200, 250);
  drawSprites();
}
function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    // SET SPEED 
    spr.setSpeed(3.5, 0);
  }
  else if (keyCode == DOWN_ARROW) {
    spr.setSpeed(3.5, 90);
  }
  else if (keyCode == LEFT_ARROW) {
    spr.setSpeed(3.5, 180);
  }
  else if (keyCode == UP_ARROW) {
    spr.setSpeed(3.5, 270);
  }
  // PAUSE OR STOP GAME 
  else if (key == ' ') {
    spr.setSpeed(0, 0);
  }
  return false;
}