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


                  } else if (direction == "left") {
                      model.slidePostion = model.slidePostion - 1;

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
          if (model.slidePostion == 0){
              this.displayMessage("<h2>WELCOME!</h2>");
          }else if (model.slidePostion == 1){
              this.displayMessage("<p>Above is ariel view of the city of Pittsburgh which is my hometown. I highlighted important landmarks and places that were important to me while growing up. Each position will be marked on the map as you click through the slides. Each marker is clickable and will have more information about the marker.</p>");
          }else if (model.slidePostion == 2){
              this.displayMessage("<p></p>");
          }else if (model.slidePostion == 3){
              this.displayMessage("<p></p>");
          }else if (model.slidePostion == 4){
              this.displayMessage("<p></p>");
          }else if (model.slidePostion == 5){
              this.displayMessage("Feel free to use the map above to explore around the city ");
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
        view.slideText();
        //view.updateMap;
    },


};

function handleRightArrow(){

  controller.ProcessRequest("right");

};

function handleLeftArrow(){
  controller.ProcessRequest("left");

};
