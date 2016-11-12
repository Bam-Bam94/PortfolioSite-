window.onload = addListeners;

function addListeners() {
  var rightArrow = document.getElementById('rightArrow');
  rightArrow.onclick = handleRightArrow;

  var leftArrow = document.getElementById("leftArrow");
  leftArrow.onclick = handleLeftArrow;

};



var model = {
  slide: [1,2,3,4,5],
  slidePostion : 0,
  slidePostionMover: function(direction){
                  if (direction == "right"){
                    model.slidePostion = model.slidePostion + 1;
                    console.log(this.slidePostion);
                    view.slideText;

                  } else if (direction == "left") {
                      //fix bug if at an end of the array
                      this.slidePostion - 1;
                  }
                },


  };




var view = {
    displayMessage : function(msg){
      var messageArea = document.getElementById("text")
      messageArea.innerHTML = msg;

    },

    position: model.slidePostion,
    slideText: function() {
          if (model.position == 0){
              this.displayMessage("1");
          }else if (model.position == 1){
              this.displayMessage("2");
          }else if (model.position == 2){
              this.displayMessage("3");
          }else if (model.position == 3){
              this.displayMessage("4");
          }else if (model.position == 4){
              this.displayMessage("5");
          }else if (model.position == 5){
              this.displayMessage("6");
          }

    },

};

var controller = {

    ProcessRequest: function(side){
        if (side=="right"){
          model.slidePostionMover("right");
        }
        else if (side=="left") {
          model.slidePostionMover("left");
        }
        view.slideText;
        //view.updateMap;
    },


};

function handleRightArrow(){

  controller.ProcessRequest("right");

};

function handleLeftArrow(){
  controller.ProcessRequest("left");

};
