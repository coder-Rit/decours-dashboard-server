const mongoose = require('mongoose');

// Define schema
const brandSchema = new mongoose.Schema({
  brandUrls: [{
    brandUrl: String
  }]
});

// Create model
const Brand = mongoose.model('Brand', brandSchema);

module.exports = Brand;