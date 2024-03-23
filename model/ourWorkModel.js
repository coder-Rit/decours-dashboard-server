const mongoose = require('mongoose');

// Define schema
const workSchema = new mongoose.Schema({
  workTitle: String,
  imageUrls: [{
    workUrl: String
  }]
});

// Create model
module.exports = (selectedDB) => selectedDB.model('Work', workSchema);

 
