var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');

})

var port = 80;
app.listen(port);
console.log("now listing to port", port);

app.use(bodyParser());


app.post("/", function(req, res) {
    var api_key = 'key-be27d45d6aa9daf33f64493e112008ca';
    var domain = 'sandboxbd32b566d95344fb935cd060e31ffd99.mailgun.org';
    var mailgun = require('mailgun-js')({
        apiKey: api_key,
        domain: domain
    });

    var data = {
        from: 'Mailgun <postmaster@sandboxbd32b566d95344fb935cd060e31ffd99.mailgun.org>',
        to: 'mikeclbrs@gmail.com',
        subject: 'Hello',
        text: 'Name: ' + req.body.name +
            '<br />Email: ' + req.body.email +
            '<br />Phonenumber: ' + req.body.phonenumber +
            '<br />Message: ' + req.body.message
    };

    mailgun.messages().send(data, function(error, body) {
        console.log(body);
        if (!error) {
            res.send("Mail Sent!!!");
        } else {
            res.send("ERROR");
        }

    });
})
