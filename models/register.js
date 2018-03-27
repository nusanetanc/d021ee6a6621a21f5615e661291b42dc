var mongoose = require('mongoose');

// User Schema
var RegisSchema = mongoose.Schema({
  fullname:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  phone:{
    type: Number,
    required: true
  },
  mobilephone:{
    type: Number,
    required: true
  },
  place:{
    type: String,
    required: true
  },
  package: {
    type: String,
    required: true
  },
  ktpurl: {
    type: String,
    required: true
  }
});

var Register = module.exports = mongoose.model('Register', RegisSchema);
