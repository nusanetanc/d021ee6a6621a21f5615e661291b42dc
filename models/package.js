var mongoose = require('mongoose');

// Package Schema
var PackageSchema = mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  price:{
    type: String,
    required: true
  },
  bandwith:{
    type: String,
    required: true
  },
  group:{
    type: String,
    required: true
  },
  detail: {
    type: String,
    required: true
  }
});

var Package = module.exports = mongoose.model('Package', PackageSchema);