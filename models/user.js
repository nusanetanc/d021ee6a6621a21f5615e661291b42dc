var mongoose = require('mongoose');

// User Schema
var UserSchema = mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  username:{
    type: String,
    required: true
  },
  password:{
    type: String,
    required: true
  },
  level: {
    type: Number,
    required: true
  },
  address: {
    type: String
  },
  cell_phone: {
    type: String
  },
  mayors: {
    type: String
  }
});

var User = module.exports = mongoose.model('User', UserSchema);
