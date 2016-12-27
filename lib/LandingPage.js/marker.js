function marker(x,y,xmove,ymove) {
  this.x = x;
  this.y = y;
  this.weld = false;
  //this.v = createVector(this.x,this.y); 
  
  this.history = [];
  
  
  //stop here 
  this.update = function(){
    if(this.weld =true){
    this.x = this.x + xmove;
    this.weld = false;
    
      
    }else{
    this.y = this.y - ymove;
    this.weld = true;
      
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
