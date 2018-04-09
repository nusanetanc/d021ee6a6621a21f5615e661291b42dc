var mongoose = require('mongoose');

// Package Schema
var SubscribeSchema = mongoose.Schema({
  email:{
    type: String,
    required: true
  }
});

var Subscribe = module.exports = mongoose.model('Subscribe', SubscribeSchema);