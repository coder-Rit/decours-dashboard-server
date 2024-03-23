const mongoose = require("mongoose");

// Define connection options if needed
const options = {};

// Connect to the first database

const connectTODatabase1 = () => {
  const db1 = mongoose.createConnection(process.env.DB_URI, options);
  db1.on("error", (err) => {
    console.error(`Database 1 connection error: ${err}`);
  });
  db1.once("open", () => {
    console.log("Connected to Database 1");
  });
  return db1
};

// Connect to the second database
const connectTODatabase2 = () => {
  const db2 = mongoose.createConnection(process.env.DB2_URI, options);
  db2.on("error", (err) => {
    console.error(`Database 2 connection error: ${err}`);
  });
  db2.once("open", () => {
    console.log("Connected to Database 2");
  });
  return db2
};

module.exports = {
  connectTODatabase1,
  connectTODatabase2,
};
