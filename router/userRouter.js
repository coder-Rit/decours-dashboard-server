const express = require('express')
const { getUser } = require('../controller/userContoller')
  

const Router = express.Router()

Router.route("/getUsers").get(getUser)
 
 

module.exports =Router