const { reviewModel_db1 } = require("../app");
const catchAsyncErorr = require("../middleware/catchAsyncErorr");

const ErrorHandler = require("../utils/errorHandler");
 
// signUp
exports.updateReviews = catchAsyncErorr(async (req, res, next) => {
  if (!req.body) {
    return next(new ErrorHandler("Please upload file", 404));
  }

  await reviewModel_db1.deleteMany({});

  const fileComp = await reviewModel_db1.create(req.body);

  res.status(200).json({
    msg: "Section updated",
  });
});



exports.getReviews = catchAsyncErorr(async (req, res, next) => {

    
  

    const data = await reviewModel_db1.find({});
  
    res.status(200).json({
      msg: "Section updated",
      data:data
    });
  });