
var circleX=0;


var circle = { 
  x : 0,
  y : 100,
  diameter : 50
};
function setup() {
  createCanvas(window.innerWidth,window.innerHeight)
}

function draw() {
  background(200,200,200,100);
  ellipse(circleX,200,250,250)
  strokeWeight(4);
  
  circleX= circleX+10;
}