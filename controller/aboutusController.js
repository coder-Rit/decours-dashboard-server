const { aboutusModel_db1 } = require("../app");
const catchAsyncErorr = require("../middleware/catchAsyncErorr");

const ErrorHandler = require("../utils/errorHandler");
 
// signUp
exports.updateAboutus = catchAsyncErorr(async (req, res, next) => {
  if (!req.body.aboutUrl) {
    return next(new ErrorHandler("Please upload file", 404));
  }

  await aboutusModel_db1.deleteMany({});

  const fileComp = await aboutusModel_db1.create(req.body);

  res.status(200).json({
    msg: "Section updated",
  });
});


exports.getAboutus = catchAsyncErorr(async (req, res, next) => {
  

  const data = await aboutusModel_db1.find({});

  res.status(200).json({
    msg: "Section updated",
    data:data
  });
});
