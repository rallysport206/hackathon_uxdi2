require('dotenv').config();
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

//allows file uploads 
var multer = require('multer');
var upload = multer({dest: "./uploads"});

// CLOUDINARY STUFF
var cloudinary = require('cloudinary');
cloudinary.config({ 
    cloud_name: 'ashco', 
    api_key: '445337545577244', 
    api_secret: process.env.CLOUDINARY_SECRET 
  })
// REQUIRE MODELS
// var User = require('../models/user');
// var Dream = require('../models/dream');

// USER FAVORITES ROUTES
// POST ROUTE
router.post('/favorite', function(req, res, next){
    console.log('favorite POST route reached!');
});

// DELETE ROUTE
router.delete('/favorite', function(req, res, next){
    console.log('favorite DELETE route reached!');
});

// USER UPLOAD ROUTES
// POST ROUTE
router.post('/upload', upload.single('myFile'), function(req, res, next){

    console.log('POST - req:', req.file.path);

    // CLOUDINARY UPLOAD
    cloudinary.uploader.upload(req.file.path, function(result) { 
        console.log('result:', result) 
      });
    res.redirect('/');
});

// DELETE ROUTE
router.delete('/upload', function(req, res, next){
    console.log('upload DELETE route reached!');
});


module.exports = router;

