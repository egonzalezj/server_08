var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/chat');

var user_schema = new Schema ({
  name: String,
  username: String,
  password: String,
  age: Number,
  email: String,
  date_of_birth: Date
});

user_schema.virtual('password_confirmation').get(function() {
  return this.p_c;
}).set(function(password) {
  this.p_c = password;
});

var User = mongoose.model('User', user_schema);

module.exports.User = User;
