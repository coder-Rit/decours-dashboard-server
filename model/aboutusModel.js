const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema({
    aboutUrl: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  discript: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("about", aboutSchema);
