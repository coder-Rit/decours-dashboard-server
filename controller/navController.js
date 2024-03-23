const { navModel_db1 } = require("../app");
const catchAsyncErorr = require("../middleware/catchAsyncErorr");

const ErrorHandler = require("../utils/errorHandler");
 
// signUp
exports.uploadLogo = catchAsyncErorr(async (req, res, next) => {
  if (!req.body.logoUrl) {
    return next(new ErrorHandler("Please upload file", 404));
  }

  await navModel_db1.deleteMany({});

  const fileComp = await navModel_db1.create({
    logoUrl: req.body.logoUrl,
  });

  res.status(200).json({
    msg: "Section updated",
  });
});



exports.getLogo = catchAsyncErorr(async (req, res, next) => {
  

  const data = await navModel_db1.find({});

  res.status(200).json({
    msg: "Section updated",
    data:data
  });
});