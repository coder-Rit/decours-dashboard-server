const { BrandModel_db1 } = require("../app");
const catchAsyncErorr = require("../middleware/catchAsyncErorr");

const ErrorHandler = require("../utils/errorHandler");
 
// signUp
exports.updateBrand = catchAsyncErorr(async (req, res, next) => {
  if (!req.body) {
    return next(new ErrorHandler("Please upload file", 404));
  }

  await BrandModel_db1.deleteMany({});

  const fileComp = await BrandModel_db1.create(req.body);

  res.status(200).json({
    msg: "Section updated",
  });
});


exports.getBrands = catchAsyncErorr(async (req, res, next) => {
  

  const data = await BrandModel_db1.find({});

  res.status(200).json({
    msg: "Section updated",
    data:data
  });
});
