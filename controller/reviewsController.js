const catchAsyncErorr = require("../middleware/catchAsyncErorr");

const ErrorHandler = require("../utils/errorHandler");
const reviewsModel = require("../model/reviewsModel");

// signUp
exports.updateReviews = catchAsyncErorr(async (req, res, next) => {
  if (!req.body) {
    return next(new ErrorHandler("Please upload file", 404));
  }

  await reviewsModel.deleteMany({});

  const fileComp = await reviewsModel.create(req.body);

  res.status(200).json({
    msg: "Section updated",
  });
});



exports.getReviews = catchAsyncErorr(async (req, res, next) => {

    
  

    const data = await reviewsModel.find({});
  
    res.status(200).json({
      msg: "Section updated",
      data:data
    });
  });