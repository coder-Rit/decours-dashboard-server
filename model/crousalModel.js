const mongoose = require("mongoose");
 

const crousalSchema = new mongoose.Schema({
  data: [
    {
      coursalUrl: {
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
    },
  ],
});

module.exports = mongoose.model("crousal", crousalSchema);
