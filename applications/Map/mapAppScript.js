//window.onload = addListeners;
var map;
var markers = [];
var rightArrow;
var leftArrow;
var x = 1;

/*function addListeners() {
  rightArrow = document.getElementById('rightArrow');
  rightArrow.onclick = handleRightArrow;

  leftArrow = document.getElementById("leftArrow");
  leftArrow.onclick = handleLeftArrow;

};*/



//new google.maps.Marker({position: markerLocation.pittsburghLocations.upperStClair, map: map});



var markerLocation = {

    pittsburghLocations: {
        upperStClair: {
            lat: 40.320715,
            lng: -80.086033
        },
        southSideFlats: {
            lat: 40.428535,
            lng: -79.976918
        },
        thePoint: {
            lat: 40.441797,
            lng: -80.012784
        },
        stripDistrict: {
            lat: 40.455410,
            lng: -79.977718
        },
        oakland: {
            lat: 40.441373,
            lng: -79.95723
        },
        heinzField: {
            lat: 40.446928,
            lng: -80.015739
        },
        PPGPaintsArena: {
            lat: 40.439577,
            lng: -79.989284
        }
    },

    personalLocations: {
        USCHighschool: {
            lat: 40.334751,
            lng: -80.070774
        },
        RE360: {
            lat: 40.421170,
            lng: -79.992824
        },
        chesterField: {
            lat: 40.440282,
            lng: -79.963111
        },
        Duquesne: {
            lat: 40.436801,
            lng: -79.990828
        },
        Rockwell: {
            lat: 40.437545,
            lng: -79.993642
        }
    },


};



var model = {
    slide: [1, 2, 3, 4, 5],
    slidePostion: 0,
    slidePostionMover: function(direction) {
        if (direction == "right" & model.slidePostion < 5 & model.slidePostion > -1) {
            model.slidePostion = model.slidePostion + 1;



        } else if (direction == "left" & model.slidePostion < 6 & model.slidePostion > 0) {
            model.slidePostion = model.slidePostion - 1;

        }
    },


};




var view = {
    displayMessage: function(msg) {
        var messageArea = document.getElementById("text")
        messageArea.innerHTML = msg;

    },




    position: model.slidePostion,
    slideText: function() {
        if (model.slidePostion == 0) {
            this.displayMessage("<h2>WELCOME!</h2>");
        } else if (model.slidePostion == 1) {
            this.displayMessage("<p>Above is ariel view of the city of Pittsburgh which is my hometown. I highlighted important landmarks and places that were important to me while growing up. Each position will be marked on the map as you click through the slides. Each marker is clickable and will have more information about the marker.</p>");

        } else if (model.slidePostion == 2) {
            this.displayMessage("<p>First, let us look at some the famous neighborhood and landmarks of the city of Pittsburgh that have had a large impact on my life. Feel free to examine the areas by clicking the markers on the map!</p>");
        } else if (model.slidePostion == 3) {
            this.displayMessage("<p>Next, let us look at the neighborhoods above and look at specific places I found to be important locations for my life.</p>");
        } else if (model.slidePostion == 4) {
            this.displayMessage("<p>Here we have these same locations but with the addition of the neighborhoods and landmarks added back in. </p>");
        } else if (model.slidePostion == 5) {
            this.displayMessage('<p>Feel free to use the map above to explore around the city! If you have any questions feel free to reach out to me using the </p> <a href ="../../contact.html">contact form</a>');
        }

    },

};

var controller = {

    ProcessRequest: function(side) {
        if (side == "right") {
            model.slidePostionMover("right");
        } else if (side == "left") {
            model.slidePostionMover("left");
        }
        view.slideText();
        //view.updateMap;
    },


};

function handleRightArrow() {

    controller.ProcessRequest("right");

};

function handleLeftArrow() {
    controller.ProcessRequest("left");

};

function initMap() {
    //USE ARRAY TO MAKE MARKERS
    var pittsburgh = {
        lat: 40.44062479999999,
        lng: -79.99588640000002
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: pittsburgh
    });
    var marker = new google.maps.Marker({
        position: pittsburgh,
        map: map,
        title: 'Pittsburgh'

    });

    var contentString =
        '<div id="content">' +
        '<div id="siteNotice">' +

        '<h1 id="firstHeading" class="firstHeading">Pittsburgh</h1>' +
        '<div id="bodyContent">' +
        '<p>Pittsburgh (/ˈpɪtsbərɡ/ pits-burg) is a city in the Commonwealth of Pennsylvania in the United States, and is the county seat of Allegheny County. The Combined Statistical Area (CSA) population of 2,659,937 is the largest in both the Ohio Valley and Appalachia, the second-largest in Pennsylvania after Philadelphia and the 20th-largest in the U.S. Located at the confluence of the Allegheny and Monongahela rivers, which form the Ohio River, Pittsburgh is known as both "the Steel City" for its more than 300 steel-related businesses, and as the "City of Bridges" for its 446 bridges.[3]  ' +
        '<br><a href=https://en.wikipedia.org/wiki/Pittsburgh>Learn More About Pittsburgh!</a> ' +

        '</div>' +
        '</div>';



    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
    var rightArrow = document.getElementById('rightArrow');
    var leftArrow = document.getElementById("leftArrow");

    function removeMarkers() {
        for (i = 0; i < markers.length; i++) {
            markers[i].setMap(null);
        };
    };



    // adds pittsburgh neighborhoods to the Map
    google.maps.event.addDomListener(rightArrow, 'click', function(location) {
            handleRightArrow();

            function addMarkers(location) {

                for (prop in location) {

                    markers.push(new google.maps.Marker({
                        position: location[prop],
                        map: map,
                        animation: google.maps.Animation.DROP
                    }));


                };
            };


            if (model.slidePostion == 2) {
                removeMarkers();
                addMarkers(markerLocation.pittsburghLocations);

            } else if (model.slidePostion == 3) {
                removeMarkers();
                addMarkers(markerLocation.personalLocations);

            } else if (model.slidePostion == 5 || model.slidePostion == 4) {
                addMarkers(markerLocation.pittsburghLocations);
                addMarkers(markerLocation.personalLocations);

            } else {
                removeMarkers();
            };
        }

    );
    google.maps.event.addDomListener(leftArrow, 'click', function(location) {
            handleLeftArrow();

            function addMarkers(location) {

                for (prop in location) {
                    console.log(markers);
                    markers.push(new google.maps.Marker({
                        position: location[prop],
                        map: map,
                        animation: google.maps.Animation.DROP
                    }));
                    console.log(markers);

                };
            };


            if (model.slidePostion == 2) {
                removeMarkers();
                addMarkers(markerLocation.pittsburghLocations);

            } else if (model.slidePostion == 3) {
                removeMarkers();
                addMarkers(markerLocation.personalLocations);

            } else if (model.slidePostion == 4 || model.slidePostion == 5) {
                addMarkers(markerLocation.pittsburghLocations);
                addMarkers(markerLocation.personalLocations);

            } else {
                removeMarkers();
            };
        }

    );

};
