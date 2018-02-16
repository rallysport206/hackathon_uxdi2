const mongoose = require('mongoose');

const pictureSchema = new mongoose.Schema({
	user_id: String,
	date: Date,
    cloudinary_url: String,
    likes: Number,
    winner: Boolean
})

var Picture = mongoose.model('Picture', pictureSchema);

module.exports = Picture;