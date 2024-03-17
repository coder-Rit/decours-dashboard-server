const mongoose = require('mongoose');

// Define schema
const workSchema = new mongoose.Schema({
  workTitle: String,
  imageUrls: [{
    workUrl: String
  }]
});

// Create model
const Work = mongoose.model('Work', workSchema);

module.exports = Work;
