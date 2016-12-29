var lo;
var spark;
markers = []

function setup() {
    createCanvas(600, 400);

    lo = new logo();
    markers.push(new marker(210, 150, 0, -.5, 260, 150,1))
    markers.push(new marker(210, 150, .15, -.3, 215 , 150,1))
    markers.push(new marker(276, 150, -.15, -.3, 215, 150,1))
    markers.push(new marker(276, 150, 0, -.5, 260, 150,1))
    markers.push(new marker(276, 150, 0, -.5, 260, 150,1))
    markers.push(new marker(384.5, 150, -1, -.2, 205, 150,1.036))
    markers.push(new marker(381, 260, -1, .2, 280, 210,1.0356))





}

function draw() {
    background(51, 205, 116);
    lo.fill();
    lo.strokeWeight();
    lo.show();
    lo.fadeInColor();


    for (var i = 0; i <= markers.length; i++) {
        if (i < markers.length) {
            var pos = markers[i];
            pos.show();
            pos.update();
        };

    };
};
