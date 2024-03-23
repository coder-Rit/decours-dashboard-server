const mongoose = require('mongoose');

// Define schema
const brandSchema = new mongoose.Schema({
  brandUrls: [{
    brandUrl: String
  }]
});

// Create model
 
module.exports   = (selectedDB) => selectedDB.model('Brand', brandSchema);

