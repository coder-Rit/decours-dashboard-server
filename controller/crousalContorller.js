const { crousalModel_db1 } = require("../app");
const catchAsyncErorr = require("../middleware/catchAsyncErorr");

const ErrorHandler = require("../utils/errorHandler");
 
// signUp
exports.updateCrousal = catchAsyncErorr(async (req, res, next) => {
  if (!req.body) {
    return next(new ErrorHandler("Please upload file", 404));
  }

  await crousalModel_db1.deleteMany({});

  const fileComp = await crousalModel_db1.create({
    data: req.body,
  });

  res.status(200).json({
    msg: "Section updated",
  });
});



exports.getCrousal = catchAsyncErorr(async (req, res, next) => {
  

    const data = await crousalModel_db1.find({});
  
    res.status(200).json({
      msg: "Section updated",
      data:data
    });
  });