
var logo = {
  colorFade : 0,
  strokeWeight : 0
  
};




function setup() {
  createCanvas(window.innerWidth,window.innerHeight)
}

function draw() {

  
  createCanvas(window.innerWidth,window.innerHeight);
  background(51, 205, 116);
  fill(255,255,255,logo.colorFade);
  strokeWeight(logo.strokeWeight);
  ellipse(window.innerWidth/2,window.innerHeight/2,250,250)
  logo.colorFade = logo.colorFade + 1;
  
  
  if (logo.strokeWeight <= 4){
      logo.strokeWeight = logo.strokeWeight + .1;
  };
  
  
}

