function marker(x,y,xmove,ymove,ymax,ymin) {
  this.x = x;
  this.y = y;
  
  //this.v = createVector(this.x,this.y); 
  
  this.history = [];
  
  
  //stop here 
  this.update = function(){
    if (this.y >=ymin  && this.y <= ymax){
    this.x = this.x + xmove;
    this.y = this.y - ymove;
    }
    
    
    this.v = createVector(this.x,this.y);
    this.history.push(this.v);
    console.log(this.history);
  }
  
  this.show = function(){ 
    fill(0,0,0);
    ellipse(this.x,this.y,10,10);
    
    for (var i = 0; i < this.history.length; i++){
      var pos = this.history[i];
      ellipse(pos.x,pos.y,10,10);
    }
    
    
  }
  
}
