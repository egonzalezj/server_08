/*server.js*/

var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var hostname = 'webrtctest2.zapto.org';
var port = 80;

var app = express();
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/chat');

var userSchemaJSON = {
  email: String,
  password: String
};

var user_schema = new Schema(userSchemaJSON);

var User = mongoose.model('User', user_schema);

app.use('/static',express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'jade')

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/login', function (req, res) {
  User.find(function (err, doc) {
    console.log(doc);
    res.render('login');
  });
});

app.post('/users', function (req, res) {
  var user = new User({email: req.body.email, password: req.body.password});
  user.save(function () {
    res.send('Data saved');
  });
});

app.listen(port, hostname, function () {
  console.log('Connected to ' + hostname + ':' + port);
});
