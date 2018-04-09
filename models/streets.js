var mongoose = require('mongoose');

// Package Schema
var StreetsSchema = mongoose.Schema({
  streets:{
    type: String,
    required: true
  },
  villages:{
    type: String,
    required: true
  }
});

var Streets = module.exports = mongoose.model('Streets', StreetsSchema);