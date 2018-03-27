var mongoose = require('mongoose');

// Package Schema
var NoStreetsSchema = mongoose.Schema({
  streets:{
    type: String,
    required: true
  },
  nostreets:{
    type: String,
    required: true
  }
});

var NoStreets = module.exports = mongoose.model('NoStreets', NoStreetsSchema);