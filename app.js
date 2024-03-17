const express = require('express')
const error = require('./middleware/error')
const connectTODatabase = require('./config/dataBase')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const cors  = require("cors")
const app = express()


if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({ path: "config/config.env" });
  }

  app.use(cors({
    credentials: true,
    origin: [process.env.ORIGIN_1,process.env.ORIGIN_2,process.env.ORIGIN_3] 
  }))
app.use(cookieParser())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

 

//connection to the data base 
connectTODatabase()

// Multer configuration for file uploads
 
const userRouter = require('./router/userRouter') 
const commanRouter = require('./router/commanRouter') 
 

app.use("/api/v1", userRouter)
app.use("/api/v1", commanRouter)
 
  
 
 
 app.use(error)
module.exports = app
