var mongoose = require('mongoose');

var User = mongoose.model('User',{
  uname: String,
  email: String,
  password: String
});

module.exports = {
  User: User
}
