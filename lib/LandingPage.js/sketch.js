var lo;
var spark;
markers = []

function setup() {
  createCanvas(600,400);
 
  lo = new logo();
  spark = new spark();
  markers.push(new marker(210,260,.5,1));
  //markers.push(new marker(380,130));
 

}
function draw() {
 background(51, 205, 116);
 lo.fill();
 lo.strokeWeight();
 lo.show();
 lo.fadeInColor();
 spark.fall();
 spark.show();
  for (var i = 0 ; i <= markers.length ; i++){
      if (i < markers.length){
      var pos = markers[i]; 
      pos.show();
      pos.update();
      }; 
        
    };
}; 
