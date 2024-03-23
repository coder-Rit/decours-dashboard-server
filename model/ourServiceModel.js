const mongoose = require("mongoose");

const ourServiceSchema = new mongoose.Schema({
  data: [
    {
      serviceUrl: {
        type: String,
        require: true,
      },
      title: {
        type: String,
        require: true,
      },
    },
  ],
});

module.exports  = (selectedDB) => selectedDB.model("ourservice", ourServiceSchema);
