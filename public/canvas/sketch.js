var lo;
var spark;
markers = []

function setup() {
  createCanvas(600,400);
 
  lo = new logo();
  markers.push(new marker(210,150,0,-1,260,150))
  markers.push(new marker(210,150,.3,-1,260,150))
  markers.push(new marker(276,150,-.3,-1,260,150))
  markers.push(new marker(276,150,0,-1,260,150))


 

}
function draw() {
 background(51, 205, 116);
 lo.fill();
 lo.strokeWeight();
 lo.show();
 lo.fadeInColor();
 
 
  for (var i = 0 ; i <= markers.length ; i++){
      if (i < markers.length){
      var pos = markers[i]; 
      pos.show();
      pos.update();
      }; 
        
    };
}; 
