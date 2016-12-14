var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('PortfolioSite-'));

var port = 80;
app.listen(port);
console.log("now listing to port", port);
