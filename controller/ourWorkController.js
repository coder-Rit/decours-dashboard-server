const catchAsyncErorr = require("../middleware/catchAsyncErorr");

const ErrorHandler = require("../utils/errorHandler");
const ourWorkModel = require("../model/ourWorkModel");

// signUp
exports.updateWork = catchAsyncErorr(async (req, res, next) => {
  if (!req.body) {
    return next(new ErrorHandler("Please upload file", 404));
  }

  await ourWorkModel.deleteMany({});

  const fileComp = await ourWorkModel.create(req.body);

  res.status(200).json({
    msg: "Section updated",
  });
});



exports.getWork = catchAsyncErorr(async (req, res, next) => {
  

    const data = await ourWorkModel.find({});
  
    res.status(200).json({
      msg: "Section updated",
      data:data
    });
  });