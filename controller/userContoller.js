const { userModel_db2 } = require("../app");
const catchAsyncErorr = require("../middleware/catchAsyncErorr");
 
// signUp
exports.getUser = catchAsyncErorr(async (req, res, next) => {

  const users = await userModel_db2.find({})

  res.status(200).json({
    users:users
  })

});
