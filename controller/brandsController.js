const catchAsyncErorr = require("../middleware/catchAsyncErorr");

const ErrorHandler = require("../utils/errorHandler");
const BrandsModel = require("../model/BrandsModel");

// signUp
exports.updateBrand = catchAsyncErorr(async (req, res, next) => {
  if (!req.body) {
    return next(new ErrorHandler("Please upload file", 404));
  }

  await BrandsModel.deleteMany({});

  const fileComp = await BrandsModel.create(req.body);

  res.status(200).json({
    msg: "Section updated",
  });
});


exports.getBrands = catchAsyncErorr(async (req, res, next) => {
  

  const data = await BrandsModel.find({});

  res.status(200).json({
    msg: "Section updated",
    data:data
  });
});
