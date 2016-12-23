function setup() {
  createCanvas(window.innerWidth,window.innerHeight)
}

function draw() {
  background(200,200,200,100);
  ellipse(mouseX,mouseY,250,250)
  strokeWeight(4);
}