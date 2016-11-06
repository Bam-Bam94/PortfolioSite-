
function displayMap(){
  var mapDisplay =document.getElementById('map');

  mapDisplay.style.display = "block";

  var winWidth = window.innerWidth;
  var winHeight = window.innerHeight;

  mapDisplay.style.left = (winWidth/2) - 300 + "px";
  mapDisplay.style.top =  (winHeight/2) - 480/2 + "px";
}


/*function displayDialogBox(){
  var DialogBox =document.getElementById('dialogBox');

  dialogBox.style.display = "block";

  var winWidth = window.innerWidth;
  var winHeight = window.innerHeight;

  dialogBox.style.left = (winWidth/2) - 300 + "px";
  dialogBox.style.top =  (winHeight/2) - 480/2 +  "px";

  dialogBox.style.height = (winHeight/2) - 300 + "px";
}*/


 function initMap() {
   var pittsburgh = {lat: 40.44062479999999, lng: -79.99588640000002};
   var map = new google.maps.Map(document.getElementById('map'), {zoom: 11, center: pittsburgh});
   var marker = new google.maps.Marker({position: pittsburgh, map: map});

   displayMap();
   //displayDialogBox();
}
