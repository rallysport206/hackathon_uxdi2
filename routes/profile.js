require('dotenv').config();
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

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
router.post('/upload', function(req, res, next){
    console.log('upload POST route reached!');
});

// DELETE ROUTE
router.delete('/upload', function(req, res, next){
    console.log('upload DELETE route reached!');
});


module.exports = router;

