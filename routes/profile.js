require('dotenv').config();
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

//allows file uploads 
var multer = require('multer');
var upload = multer({dest: "./uploads"});
// import fileUploadMiddleware from './fileUploadMiddleware';

// CLOUDINARY STUFF
var cloudinary = require('cloudinary');
cloudinary.config({ 
    cloud_name: 'ashco', 
    api_key: '445337545577244', 
    api_secret: process.env.CLOUDINARY_SECRET 
  })

// REQUIRE MODELS
var User = require('../models/user');
var Picture = require('../models/picture');




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
router.post('/upload', upload.single('file'), function(req, res, next){
    // res.send(req.body.user);
    console.log('user', req.body.user);
    // let user = req.body.user;
    // CLOUDINARY UPLOAD
    cloudinary.uploader.upload(req.file.path, function(result) { 
        
        

        // console.log('upload result', result);
        let postData = {
            user_id: '5a860c2d88f84ee083c5121e',
            // date: DateTime.now(),
            cloudinary_etag: result.etag,
            cloudinary_url: result.url,
            likes: 0,
            winner: false
        }
    
        // console.log('test data', postData);
    
        Picture.create(postData, function (err, picture) {
            if(err){
                console.log(err);
            }
            else {
                console.log("Database posted", picture);
            }
          });
    });

    

    // if(req.body.user) {
		// var postData = {
		// 	// user_id: user.id,
		// 	date: req.body.date,
        //     cloudinary_etag: etag,
        //     cloudinary_url: url,
        //     likes: 0,
        //     winner: false
        // }    
		// let database = await databaseAddition.addEntry(postData, sentiment, keywords[1]);
	// } 
	// else {
    //     console.log("No user to add to datbase");
	// }
    
    res.redirect('/profile');
});

// DELETE ROUTE
router.delete('/upload', function(req, res, next){
    console.log('upload DELETE route reached!');
});


module.exports = router;

