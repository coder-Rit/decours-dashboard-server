const catchAsyncErorr = require("../middleware/catchAsyncErorr");

const ErrorHandler = require("../utils/errorHandler");
const crousalModel = require("../model/crousalModel");

// signUp
exports.updateCrousal = catchAsyncErorr(async (req, res, next) => {
  if (!req.body) {
    return next(new ErrorHandler("Please upload file", 404));
  }

  await crousalModel.deleteMany({});

  const fileComp = await crousalModel.create({
    data: req.body,
  });

  res.status(200).json({
    msg: "Section updated",
  });
});



exports.getCrousal = catchAsyncErorr(async (req, res, next) => {
  

    const data = await crousalModel.find({});
  
    res.status(200).json({
      msg: "Section updated",
      data:data
    });
  });