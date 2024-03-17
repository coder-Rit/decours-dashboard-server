const catchAsyncErorr = require("../middleware/catchAsyncErorr");

const ErrorHandler = require("../utils/errorHandler");
const aboutusModel = require("../model/aboutusModel");

// signUp
exports.updateAboutus = catchAsyncErorr(async (req, res, next) => {
  if (!req.body.aboutUrl) {
    return next(new ErrorHandler("Please upload file", 404));
  }

  await aboutusModel.deleteMany({});

  const fileComp = await aboutusModel.create(req.body);

  res.status(200).json({
    msg: "Section updated",
  });
});


exports.getAboutus = catchAsyncErorr(async (req, res, next) => {
  

  const data = await aboutusModel.find({});

  res.status(200).json({
    msg: "Section updated",
    data:data
  });
});
