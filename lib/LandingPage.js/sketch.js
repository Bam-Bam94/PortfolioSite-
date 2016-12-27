function logo(){
  this.colorFade = 0;
  this.strokeWeightFade = 0;
  this.fill = function(){
  fill(255,255,255,this.colorFade);
  }
  this.show = function() {
    ellipse(width/2,height/2,250.250);
  }
  this.fadeInColor = function() {
    this.colorFade = this.colorFade + 1;
  }
  this.strokeWeight = function(){
  
  if(this.strokeWeightFade <= 4){
  this.strokeWeightFade= this.strokeWeightFade + .01
  strokeWeight(this.strokeWeightFade);
    }
  }
  
}



var lo;

function setup() {
  createCanvas(600,400);
 
  lo = new logo();

};
function draw() {
 background(51, 205, 116);
 lo.fill();
 lo.strokeWeight();
 lo.show();
 lo.fadeInColor();
  
  
}; 
