var model = {
  slide: [1,2,3,4,5],
  slidePostion : 0;
  slidePostionMover: function(direction){
                for ( this.slide[this.slidePostion]){
                  if (direction = "right"){
                    //fix bug if at an end of the array
                    this.slidePostion++;
                  } else if (direction = "left") {
                      //fix bug if at an end of the array
                      this.slidePostion--;
                  }
                };


  },


};

var view = {
    position: model.slide,
    slideText: function (position){
          if (this.position){

          }

    },

};

var controller = {



};
