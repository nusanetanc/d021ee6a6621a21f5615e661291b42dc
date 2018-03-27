var express = require('express');
var each = require('foreach');
var router = express.Router();
var Village = require('../models/villages');
var Streets = require('../models/streets');
var NoStreets = require('../models/nostreets');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET location listing. */
router.get('/subdistric/:subdistric', function(req, res, next) {
    Village.find({subdistric: req.params.subdistric}, { villages: 1, _id: 0},  function(err, villages) {
      res.send(villages);
   });
});

/* GET location listing. */
router.get('/villages/:villages', function(req, res, next) {
    Streets.find({villages: req.params.villages}, { streets: 1, _id: 0},  function(err, streets) {
      res.send(streets);
   });
});

/* GET location listing. */
router.get('/streets/:streets', function(req, res, next) {
    NoStreets.find({streets: req.params.streets}, { nostreets: 1, _id: 0},  function(err, nostreets) {
      res.send(nostreets);
   });
});

/* GET location listing. */
router.get('/list', function(req, res, next) {
    Village.find({ villages: 1, _id: 0}, function(err, locations) {
       res.json(locations);
   });
});

// Add Submit POST Route
router.post('/add', function(req, res){
  req.checkBody('city','City is required').notEmpty();
  req.checkBody('place','Place is required').notEmpty();
  req.checkBody('idfiberstar','Idfiberstar is required').notEmpty();;

  // Get Errors
  let errors = req.validationErrors();
  
  if(errors){
    res.render('index', {
      title:'Home',
      errors:errors
    });
  } else {
    let location = new Location();
    location.city = req.body.city;
    location.place = req.body.place;
    location.idfiberstar = req.body.idfiberstar;
    
    location.save(function(err){
      if(err){
        console.log(err);
        return;
      } else {
        req.flash('success','Article Added');
        //res.redirect('/a');
      }
    });
  }
});

module.exports = router;
