//////////////////////////////////
// COURSERA GRAPHICS PROGRAMMING
//////////////////////////////////
// Adapted from https://github.com/nature-of-code/
// released under MIT license

var balls;
///////////////////////////////////////////////
function setup() {
  createCanvas(900,600);
  background(0);
  balls = [];
  // create 100 balls
  for (var i=0; i<100; i++){
    balls.push(new Ball());
  }
}
////////////////////////////////////////////////
function draw() {
  for (var i=0; i<balls.length; i++){
    balls[i].run();
  }
}
///////////////////////////////////////////////
class Ball {

  constructor(){
    var randomX = width/2 + random(-100,100);
    var randomY = height/2 + random(-100,100);
    
    this.velocity = new createVector(0, 0);
    this.location = new createVector(randomX, randomY);
    this.prevLocation = new createVector(randomX, randomY);
    this.acceleration = new createVector(2,2);
    this.maxVelocity = 1000;
  }

  run(){
    this.draw();
    this.move();
  }

  draw(){
    stroke(125,212,255, 80);
    strokeWeight(0.2);
    line(this.location.x, this.location.y, this.prevLocation.x, this.prevLocation.y);
    this.prevLocation = this.location.copy();
  }

  move(){
    var mouse = createVector(mouseX, mouseY);
    var dir = p5.Vector.sub(mouse, this.location);
    dir.normalize();
    dir.mult(0.3);
    this.acceleration = dir;
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxVelocity);
    this.location.add(this.velocity);
  }

}
