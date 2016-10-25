/*server.js*/

var express = require('express');
var bodyParser = require('body-parser');

var hostname = 'webrtctest2.zapto.org';
var port = 80;

var app = express();

app.use('/static',express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'jade')

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/login', function (req, res) {
  res.render('login');
})

app.post('/users', function (req, res) {
  console.log('Password: ' + req.body.password);
  console.log('Email: ' + req.body.email);
  res.send('Data received');
})

app.listen(port, hostname, function () {
  console.log('Connected to ' + hostname + ':' + port);
});
