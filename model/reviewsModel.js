const mongoose = require('mongoose');

// Define schema
const reviewSchema = new mongoose.Schema({
  title: String,
  discript: String,
  data: [{
    profileImage: String,
    title: String,
    discript: String
  }]
});

// Create model
const reviewModel = mongoose.model('reviewModel', reviewSchema);

module.exports = reviewModel;
