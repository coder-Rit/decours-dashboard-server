const catchAsyncErorr = require("../middleware/catchAsyncErorr");

const ErrorHandler = require("../utils/errorHandler");
const navModel = require("../model/navModel");

// signUp
exports.uploadLogo = catchAsyncErorr(async (req, res, next) => {
  if (!req.body.logoUrl) {
    return next(new ErrorHandler("Please upload file", 404));
  }

  await navModel.deleteMany({});

  const fileComp = await navModel.create({
    logoUrl: req.body.logoUrl,
  });

  res.status(200).json({
    msg: "Section updated",
  });
});



exports.getLogo = catchAsyncErorr(async (req, res, next) => {
  

  const data = await navModel.find({});

  res.status(200).json({
    msg: "Section updated",
    data:data
  });
});