const mongoose = require('mongoose')
const shopSchema = new mongoose.Schema({
    Name:{
        type : String,
        required : true
    },
    Id:{
        type: String,
        required:true,
        unique:true
    },
    Email:{
        type: String,
        required : true
    },
    Password:{
        type : String,
        required : true
    }
})
const Shop = mongoose.model('Shop',shopSchema)
module.exports = Shop;