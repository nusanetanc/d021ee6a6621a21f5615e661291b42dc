var mongoose = require('mongoose');

// Package Schema
var VillageSchema = mongoose.Schema({
  subdistric:{
    type: String,
    required: true
  },
  villages:{
    type: String,
    required: true
  }
});

var Village = module.exports = mongoose.model('Village', VillageSchema);