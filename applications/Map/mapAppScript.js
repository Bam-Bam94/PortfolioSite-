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
              this.displayMessage("<p>First, let us look at some the famous neighborhood and landmarks of the city of Pittsburgh that have had a large impact on my life. Feel free to examine the areas by clicking the markers on the map!</p>");
          }else if (model.slidePostion == 3){
              this.displayMessage("<p>Next, let us look at the neighborhoods above and look at specific places I found to be important locations for my life.</p>");
          }else if (model.slidePostion == 4){
              this.displayMessage("<p>Here we have these same locations but with the addition of the neighborhoods and landmarks added back in. </p>");
          }else if (model.slidePostion == 5){
              this.displayMessage('"<p>Feel free to use the map above to explore around the city! If you have any questions feel free to reach out to me using the </p> <a href ="../../contact.html">contact form</a>');
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
