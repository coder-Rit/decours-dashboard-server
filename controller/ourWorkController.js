const { WorkModel_db1 } = require("../app");
const catchAsyncErorr = require("../middleware/catchAsyncErorr");

const ErrorHandler = require("../utils/errorHandler");
 
// signUp
exports.updateWork = catchAsyncErorr(async (req, res, next) => {
  if (!req.body) {
    return next(new ErrorHandler("Please upload file", 404));
  }

  await WorkModel_db1.deleteMany({});

  const fileComp = await WorkModel_db1.create(req.body);

  res.status(200).json({
    msg: "Section updated",
  });
});



exports.getWork = catchAsyncErorr(async (req, res, next) => {
  

    const data = await WorkModel_db1.find({});
  
    res.status(200).json({
      msg: "Section updated",
      data:data
    });
  });