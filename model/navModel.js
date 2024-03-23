const mongoose = require('mongoose')
 

const navigtionSchema = new mongoose.Schema({
    logoUrl: {
        type: String,
        required: true,
    } 
    
   
})


module.exports  = (selectedDB) => selectedDB.model('navbar', navigtionSchema)

