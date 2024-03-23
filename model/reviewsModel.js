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
module.exports  = (selectedDB) => selectedDB.model('reviewModel', reviewSchema);

 
