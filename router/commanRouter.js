const express = require('express')
const { uploadLogo, getLogo } = require('../controller/navController')
const { isAuthenticated, authorizedRole } = require('../middleware/auth')
const { updateService, getServices } = require('../controller/servicesController')
const { updateAboutus, getAboutus } = require('../controller/aboutusController')
const { updateCrousal, getCrousal } = require('../controller/crousalContorller')
const { updateBrand, getBrands } = require('../controller/brandsController')
const { updateWork, getWork } = require('../controller/ourWorkController')
const { updateReviews, getReviews } = require('../controller/reviewsController')
 

const Router = express.Router()

Router.route("/uploadLogo").post(uploadLogo)
Router.route("/updateOurService").post(updateService)
Router.route("/updateAboutSection").post(updateAboutus)
Router.route("/updateCarousel").post(updateCrousal)
Router.route("/updateBrands").post(updateBrand)
Router.route("/updateOurWork").post(updateWork)
Router.route("/updateReviews").post(updateReviews)



Router.route("/getLogo").get(getLogo)
Router.route("/getOurService").get(getServices)
Router.route("/getAboutSection").get(getAboutus)
Router.route("/getCarousel").get(getCrousal)
Router.route("/getBrands").get(getBrands)
Router.route("/getOurWork").get(getWork)
Router.route("/getReviews").get(getReviews)


  
 

module.exports =Router