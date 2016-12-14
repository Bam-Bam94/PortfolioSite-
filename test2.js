var express = require('express');
var app = express();
var path = require('path');

app.get('/', function(req,res){
                res.sendFile(path.join(__dirname,'index.html'));


});

var port = 80;
app.listen(port);
console.log("now listing to port", port);
