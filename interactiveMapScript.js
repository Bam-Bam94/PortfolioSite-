

 function initMap() {
   var pittsburgh = {lat: 40.44062479999999, lng: -79.99588640000002};
   var map = new google.maps.Map(document.getElementById('map'), {zoom: 11, center: pittsburgh});
   var marker = new google.maps.Marker({position: pittsburgh, map: map});
   displayMap();
};
