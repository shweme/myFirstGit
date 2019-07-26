var express = require('express'); //used for routing
var app = express();
var http = require('http').Server(app); //used to provide http functionality
var route = require('./routes/accountroute.js')(app, path);

var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(express.static(__dirname+'/www'));

let server = http.listen(3000, '127.0.0.1', function () {
    var d = new Date();
    var hr = d.getHours();
    var min = d.getMinutes();
    console.log("Server has been started at: "+ hr + ":" + min);
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/www/tform.html');
});

app.post('/api/login', function(req, res){
    if(!req.body){
        return res.sendStatus(400)
    }
    var customer = {};
    customer.email = req.body.email;
    customer.upwd = req.body.upwd;
    if (req.body.email == "abc@com.au" && req.body.upwd == "123"){
        customer.valid = true;
    } else {
        customer.valid = false;
    }
    res.send(customer);
});
