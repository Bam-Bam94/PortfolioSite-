window.onload = addListeners;
var map;
var markers = [];
var rightArrow ;
var leftArrow ;

function addListeners() {
  rightArrow = document.getElementById('rightArrow');
  rightArrow.onclick = handleRightArrow;

  leftArrow = document.getElementById("leftArrow");
  leftArrow.onclick = handleLeftArrow;

};


function initMap() {
  var pittsburgh = {lat: 40.44062479999999, lng: -79.99588640000002};
  var map = new google.maps.Map(document.getElementById('map'), {zoom: 10, center: pittsburgh});
  var marker = new google.maps.Marker({position: pittsburgh, map: map});
  var rightArrow = document.getElementById('rightArrow');
  var leftArrow = leftArrow = document.getElementById("leftArrow");
  new google.maps.Marker({position: markerLocation.pittsburghLocations.upperStClair, map: map});

  function updateMarker(location){
      if (location == 1 ){
        for (prop in markerLocation.pittsburghLocations){
             new google.maps.Marker({position: markerLocation.pittsburghLocations[prop], map: map});
        };
      };
  };
  function log (){
    console.log("hello");
  };

  google.maps.event.addDomListener(rightArrow, 'click', log()) /*  updateMarker(model.slidePostion)*/

};
 //new google.maps.Marker({position: markerLocation.pittsburghLocations.upperStClair, map: map});



var markerLocation = {

        pittsburghLocations: {  upperStClair: {lat: 40.320715, lng: -80.086033},
                                southSideFlats: {lat :40.428535, lng: -79.976918},
                                thePoint: { lat: 40.441797, lng: -80.012784},
                                stripDistrict: { lat: 40.455410, lng: -79.977718},
                                oakland: { lat:40.441373, lng: -79.95723},
                                heinzField: {lat:40.446928,lng: -80.015739},
                                PPGPaintsArena: {lat:40.439577, lng:-79.989284}
},

          personalLocations:{ USCHighschool: {lat: 40.334751, lng:-80.070774},
                              RE360: {lat: 40.421170, lng: -79.992824},
                              chesterField: { lat:40.440282, lng:-79.963111},
                              Duquesne: {lat:40.436801, lng: -79.990828},
                              Rockwell: {lat:40.437545, lng: -79.993642}
                            }

};



var model = {
  slide: [1,2,3,4,5],
  slidePostion : 0,
  slidePostionMover: function(direction){
                  if (direction == "right"){
                    model.slidePostion = model.slidePostion + 1;



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
    createMarkers : function(markerLocation){



    },




    position: model.slidePostion,
    slideText: function() {
          if (model.slidePostion == 0){
              this.displayMessage("<h2>WELCOME!</h2>");
          }else if (model.slidePostion == 1){
              this.displayMessage("<p>Above is ariel view of the city of Pittsburgh which is my hometown. I highlighted important landmarks and places that were important to me while growing up. Each position will be marked on the map as you click through the slides. Each marker is clickable and will have more information about the marker.</p>");
              this.createMarkers(markerLocation.pittsburghLocations);
          }else if (model.slidePostion == 2){
              this.displayMessage("<p>First, let us look at some the famous neighborhood and landmarks of the city of Pittsburgh that have had a large impact on my life. Feel free to examine the areas by clicking the markers on the map!</p>");
          }else if (model.slidePostion == 3){
              this.displayMessage("<p>Next, let us look at the neighborhoods above and look at specific places I found to be important locations for my life.</p>");
          }else if (model.slidePostion == 4){
              this.displayMessage("<p>Here we have these same locations but with the addition of the neighborhoods and landmarks added back in. </p>");
          }else if (model.slidePostion == 5){
              this.displayMessage('<p>Feel free to use the map above to explore around the city! If you have any questions feel free to reach out to me using the </p> <a href ="../../contact.html">contact form</a>');
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
