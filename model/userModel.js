const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "name is required"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "email is required"],
  },
  password: {
    type: String,
    select: false,
    // required:[true, "password is required"],
    minLength: [6, "password must have atleast 6 characters"],
    // match:/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
  },
  mobile: {
    type: String,
    minLength: [10, "no should have minimum 10 digits"],
    maxLength: [10, "no should have maximum 10 digits"],
    match: [/\d{10}/, "no should only have digits"],
  },
});

module.exports = (selectedDB) => selectedDB.model("user", userSchema);
