var express = require('express');
var nodemailer = require("nodemailer");
var flash = require('express-flash');
var path = require("path");

var router = express.Router();
var Register = require('../models/register');
var Subscribe = require('../models/subscribe');


var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    //pool: true,
    //host: 'smtp.gmail.com', // Gmail as mail client
    //port: 587,
    //secureConnection: false, // use SSL
    //debug: false,
    //tls: {cipher:'SSLv3'},
    auth: {
        user: "mailnurhandi",
        pass: "yudiganteng"
    }
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Nusanet Pekanbaru - Internet Solution Provider' });
});


// Get about
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About - Nusanet Pekanbaru' });
});


// Get about
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact - Nusanet Pekanbaru' });
});

// Get about
router.get('/support', function(req, res, next) {
  res.render('support', { title: 'Support - Nusanet Pekanbaru' });
});

// Add Submit POST Route
router.post('/support', function(req, res){
  req.checkBody('name','Name is required').notEmpty();
  req.checkBody('email','Email is required').notEmpty();
  req.checkBody('selectFor','Phone is required').notEmpty();
  req.checkBody('message','Message is required').notEmpty();

  // Get Errors
  let errors = req.validationErrors();
  
  if(errors){
    res.render('support', {
      title:'support',
      errors:errors
    });
  } else {
    var mailOptions={
      to: "nurhandiy@gmail.com",
      subject : "Web Support Nusanet",
      html : `
        <h5>Dear All</h5>
        <h6>Berikut <br/>
        Nama: `+req.body.name+`<br/>
        Email: `+req.body.email+`<br/>
        For: `+req.body.selectFor+`<br/>
        message : `+req.body.message+`<br/>
        Terimaksih`
      }
      console.log(mailOptions);
      smtpTransport.sendMail(mailOptions, function(error, response){
      if(error){
      console.log(error);
      res.end("error");
      }else{
      console.log("Message sent: " + response.message);
      res.end("sent");
      }
    });
  }
});

/* GET Retail Business Wireless. */
router.get('/careers', function(req, res, next) {
  res.render('careers', { title: 'Careers - Nusanet Pekanbaru' });
});

/* GET Register2. */
router.get('/register-coverage-area', function(req, res, next) {
  res.render('register-coveragearea', { title: 'Register - Nusanet Pekanbaru' });
});

/* GET Register2. */
router.get('/register-customer-data', function(req, res, next) {
  res.render('register-customerdata', { title: 'Register - Nusanet Pekanbaru' });
});

/* GET Register2. */
router.get('/register-summary', function(req, res, next) {
  res.render('register-summary', { title: 'Register - Nusanet Pekanbaru' });
});

/* GET Register2. */
router.get('/register-notcovered', function(req, res, next) {
  res.render('register-notcovered', { title: 'Register - Nusanet Pekanbaru' });
});

/* GET Retail Business Fiber. */
router.get('/broadband-fiber-optic', function(req, res, next) {
  res.render('broadband-fiber-optic', { title: 'Broadband Fiber Optic - Nusanet Pekanbaru' });
});

/* GET Broadband fiber registration page. */
router.get('/broadband-fiber-optic/registration2/:package', function(req, res, next) {
    res.render('register-broadband-fiber-optic', { title: 'Registration - Nusanet Pekanbaru', selectpackage: req.params.package });
});

/* GET Broadband fiber registration page. */
router.get('/broadband-fiber-optic/registration/:package', function(req, res, next) {
    res.render('register-broadband-fiber-optic2', { title: 'Registration - Nusanet Pekanbaru', selectpackage: req.params.package });
});

/* GET Corporate Radio Wireless. */
router.get('/corporate-wireless', function(req, res, next) {
  res.render('corporate-wireless', { title: 'Corporate Radio Wireless - Nusanet Pekanbaru' });
});

/* GET Corporate Radio Wireless Registration. */
router.get('/corporate-wireless/registration/:package', function(req, res, next) {
  res.render('register-corporate', { title: 'Registration - Nusanet Pekanbaru', selectpackage: req.params.package });
});

/* GET Corporate Fiber Optic. */
router.get('/corporate-fiber-optic/registration/:package', function(req, res, next) {
  res.render('register-corporate', { title: 'Registration - Nusanet Pekanbaru', selectpackage: req.params.package });
});

/* GET Corporate Fiber Optic. */
router.get('/corporate-fiber-optic', function(req, res, next) {
  res.render('corporate-fiber-optic', { title: 'Corporate Fiber Optic - Nusanet Pekanbaru' });
});

/* GET Corporate Fiber Optic. */
router.get('/register-success', function(req, res, next) {
  res.render('register-success', { title: 'Registration SUccess - Nusanet Pekanbaru', message : req.flash('result') });
});

/* GET home page. */
router.get('/listregister', function(req, res, next) {
  Register.find(function(err, registers) {
       console.log( registers );
       res.json(registers);
   });
});


// Add Submit POST Route
router.post('/broadband-fiber-optic/registration/:selectpackage', function(req, res){
  //req.checkBody('fullname','Full Name is required').notEmpty();
  //req.checkBody('mobilephone','Mobile Phone is required').notEmpty();
 // req.checkBody('email','Email is required').notEmpty();

  // Get Errors
  //let errors = req.validationErrors();
  //console.log(req.body.fullname)
  //if(errors){
    //res.render('register-broadband-fiber-optic2', {
     // title:'Registration - Nusanet Pekanbaru',
     // errors:errors,
     // selectpackage: req.params.selectpackage
   // });
 // } else {
    var ktpFile = req.files.ktpFile;
    var fullName = req.body.fullname;
    // Use the mv() method to place the file somewhere on your server
    ktpFile.mv('./uploads/'+fullName+'.jpg', function(err) {
      if (err)
        return res.status(500).send(err);
   
      console.log('KTP upload succesfully');
    });
    //var fileKtp = req.files.uploadKTP
    //var saveFile = fileKtp.mv('./public/images/ktp/'+req.body.fullname+'.png');
    var mailOptions={
      to: "nurhandiy@gmail.com",
      subject : "Web Registration Nusanet",
      html : `
        <h5>Dear All</h5>
        <h6>Berikut Customer Registrasi Fiber Broadband Online<br/>
        Nama: `+req.body.fullname+`<br/>
        Email: `+req.body.email+`<br/>
        mobilephone: `+req.body.mobilephone+`<br/>
        phone: `+req.body.phone+`<br/>
        packages: `+req.params.selectpackage+`<br/>
        Place: `+req.body.city+' - '+req.body.districs+' - '+req.body.villages+' - '+req.body.streets+' - '+req.body.streetnos+`<br/>
        KTP: <img width="200px" src="cid:kartuidentitas"/><br/>
        Terimaksih` ,
      attachments: [{
        filename: req.body.fullname+'.png',
        path: './uploads/'+fullName+'.jpg',
        cid: 'kartuidentitas'
      }] 
      }
      console.log(mailOptions);
      smtpTransport.sendMail(mailOptions, function(error, response){
      if(error){
        console.log(error);
        req.flash('result','Sorry Mail Server Error, Please Try Again');
        res.redirect('/register-success');
      }else{
        var register = new Register({
        fullname: req.body.fullname,
        email: req.body.email,
        mobilephone : req.body.mobilephone,
        phone : req.body.phone,
        package : req.params.selectpackage,
        place : req.body.city+' - '+req.body.districs+' - '+req.body.villages+' - '+req.body.streets+' - '+req.body.streetnos,
        ktpurl : './uploads/'+req.body.fullname+'.jpg'
      })
      register.save(function(err, result) {
        console.log(err)
        console.log(result)
        console.log("Message sent: " + response.message);
        req.flash('result','Thank You For Registration, We will Contact you');
        res.redirect('/register-success');
      });
      } 
    });
//  }
});

// Add Submit POST Route
router.post('/broadband-fiber-optic/inquiry-form', function(req, res){
  req.checkBody('fullname','Full Name is required').notEmpty();
  req.checkBody('mobilenumber','Mobile Number is required').notEmpty();
  req.checkBody('emailaddr','Email is required').notEmpty();
  req.checkBody('city','City is required').notEmpty();
  req.checkBody('subdistict','Subdistrict is required').notEmpty();
  req.checkBody('villages','Villages is required').notEmpty();
  req.checkBody('strets','Strets is required').notEmpty();
  req.checkBody('no','No Location is required').notEmpty();
  
  // Get Errors
  let errors = req.validationErrors();
  
  if(errors){
    res.render('register-notcovered', {
      title:'Inquiry Form',
      errors:errors
    });
  } else {
    
        var mailOptions={
      to: "purwanto1337@gmail.com",
      subject : "inqury form broadband Fiber Optic Nusanet",
      html : `
        <h5>Dear All</h5>
        <h6>Berikut Customer Inquiry Fiber Broadband Online<br/>
        Nama: `+req.body.fullname+`<br/>
        No Hp: `+req.body.mobilenumber+`<br/>
        Email: `+req.body.emailaddr+`<br/>
        Kota : `+req.body.city+`<br/>
        Kecamatan : `+req.body.subdistict+`<br/>
        Kelurahan: `+req.body.villages+`<br/>
        Jalan: `+req.body.strets+`<br/>
        No: `+req.body.no+`<br/>
        message : `+req.body.addtional+`<br/>
        Terimaksih`
      }
      console.log(mailOptions);
      smtpTransport.sendMail(mailOptions, function(error, response){
      if(error){
        console.log(error);
        req.flash('result','Mail Server Error');
        res.redirect('/register-notcovered');
      }else{
        console.log("Message sent: " + response.message);
        req.flash('result','Thank You For Inquiry, We will contact you if the service already exists');
        res.redirect('/register-success');
      }
    });
  }
});

// Add Submit POST Route
router.post('/subscribe/add', function(req, res){
  req.checkBody('email','Email is required').notEmpty();

  // Get Errors
  let errors = req.validationErrors();
  
  if(errors){
    res.render('index', {
      title:'Nusanet Pekanbaru',
      errors:errors
    });
  } else {
    let subscribe = new Subscribe();
    subscribe.email = req.body.email;
    
    subscribe.save(function(err){
      if(err){
        console.log(err);
        return;
      } else {
        req.flash('success','Thank You For Subscribe');
        res.redirect('/');
      }
    });
  }
});

// Add Submit POST Route
router.post('/contact', function(req, res){
  req.checkBody('name','Name is required').notEmpty();
  req.checkBody('email','Email is required').notEmpty();
  req.checkBody('phone','Phone is required').notEmpty();
  req.checkBody('message','Message is required').notEmpty();

  // Get Errors
  let errors = req.validationErrors();
  
  if(errors){
    res.render('contact', {
      title:'contact',
      errors:errors
    });
  } else {
    var mailOptions={
      to: "nurhandiy@gmail.com",
      subject : "Contact Nusanet",
      html : `
        <h5>Dear All</h5>
        <h6>Berikut <br/>
        Nama: `+req.body.name+`<br/>
        Email: `+req.body.email+`<br/>
        Phone: `+req.body.phone+`<br/>
        message : `+req.body.message+`<br/>
        Terimaksih`
      }
      console.log(mailOptions);
      smtpTransport.sendMail(mailOptions, function(error, response){
      if(error){
      console.log(error);
      res.end("error");
      }else{
      console.log("Message sent: " + response.message);
      res.end("sent");
      }
    });
  }
});

// Add Submit POST regist
router.post('/registration', function(req, res){
  req.checkBody('name','Name is required').notEmpty();
  req.checkBody('email','Email is required').notEmpty();
  req.checkBody('phone','Phone is required').notEmpty();
  req.checkBody('address','Address is required').notEmpty();
  req.checkBody('package','Package is required').notEmpty();

  // Get Errors
  let errors = req.validationErrors();
  
  if(errors){
    res.render('registration', {
      title:'registration',
      errors:errors
    });
  } else {
    var mailOptions={
      to: "nurhandiy@gmail.com",
      subject : "Registration Package Nusanet",
      html : `
        <h5>Dear All</h5>
        <h6>Berikut <br/>
        Nama: `+req.body.name+`<br/>
        Email: `+req.body.email+`<br/>
        Phone: `+req.body.phone+`<br/>
        Package: `+req.body.package+`<br/>
        Address : `+req.body.address+`<br/>
        Terimaksih`
      }
      console.log(mailOptions);
      smtpTransport.sendMail(mailOptions, function(error, response){
        if(error){
          console.log(error);
          res.end("error");
        }else{
          console.log("Message sent: " + response.message);
          res.end("sent");
          res.redirect('/corporate-wireless');
      }
    });
  }
});

// Add Submit POST Careers
router.post('/careers', function(req, res){
  req.checkBody('name','Name is required').notEmpty();
  req.checkBody('email','Email is required').notEmpty();
  req.checkBody('phone','Phone is required').notEmpty();
  req.checkBody('position','Position is required').notEmpty();
  req.checkBody('attachment','Attachment is required').notEmpty();
  
  // Get Errors
  let errors = req.validationErrors();
  
  if(errors){
    res.render('careers', {
      title:'careers',
      errors:errors
    });
  } else {
    var mailOptions= {
      to: "nurhandiy@gmail.com",
      subject : "Online Recruitment - "+ req.body.position,
      html : `
        <h5>Dear All</h5>
        <h6>Berikut <br/>
        Nama: `+req.body.name+`<br/>
        Email: `+req.body.email+`<br/>
        Phone: `+req.body.phone+`<br/>
        Position : `+req.body.position+`<br/>
        Terimaksih`,
      attachment: [{ filename: req.files.attachment }]
      }
      console.log(mailOptions);
      smtpTransport.sendMail(mailOptions, function(error, response){
      if(error){
        console.log(error);
        res.end("error");
      }else{
        console.log("Message sent: " + response.message);
        res.end("sent");
        res.redirect('/careers');
      }
    });
  }
});

module.exports = router;
