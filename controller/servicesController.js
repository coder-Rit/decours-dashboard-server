const catchAsyncErorr = require("../middleware/catchAsyncErorr");

const ErrorHandler = require("../utils/errorHandler");
const ourServiceModel = require("../model/ourServiceModel");

// signUp
exports.updateService = catchAsyncErorr(async (req, res, next) => {
  if (!req.body) {
    return next(new ErrorHandler("Please upload file", 404));
  }

  await ourServiceModel.deleteMany({});

  const fileComp = await ourServiceModel.create({
    data: req.body,
  });

  res.status(200).json({
    msg: "Section updated",
  });
});



exports.getServices = catchAsyncErorr(async (req, res, next) => {
  

    const data = await ourServiceModel.find({});
  
    res.status(200).json({
      msg: "Section updated",
      data:data
    });
  });