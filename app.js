 

const userModel = require("./model/userModel");
const aboutusModel = require("./model/aboutusModel");
const crousalModel = require("./model/crousalModel");
const navModel = require("./model/navModel");
const ourServiceModel = require("./model/ourServiceModel");
const reviewModel = require("./model/reviewsModel");
const Brand = require("./model/BrandsModel");
const Work = require("./model/ourWorkModel");

const express = require("express");
const error = require("./middleware/error");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const { connectTODatabase1, connectTODatabase2 } = require("./config/dataBase");
const app = express();

if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "config/config.env" });
}

app.use(
  cors({
    credentials: true,
    origin: [process.env.ORIGIN_1, process.env.ORIGIN_2],
  })
);
app.use(cookieParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//connection to the data base
const db1 = connectTODatabase1();
const db2 = connectTODatabase2();

exports.userModel_db2 = userModel(db2);

exports.aboutusModel_db1 = aboutusModel(db1);
exports.crousalModel_db1 = crousalModel(db1);
exports.navModel_db1 = navModel(db1);
exports.ourServiceModel_db1 = ourServiceModel(db1);
exports.reviewModel_db1 = reviewModel(db1);
exports.BrandModel_db1 = Brand(db1);
exports.WorkModel_db1 = Work(db1);

// Multer configuration for file uploads


 const userRouter = require("./router/userRouter");
const commanRouter = require("./router/commanRouter");

app.use("/api/v1", userRouter);
app.use("/api/v1", commanRouter);

app.use(error);
module.exports = app;
