const mongoose = require('mongoose')
const ShopseatSchema = new mongoose.Schema({
    Tables:{
        type : String,
        required : true
    },
    SeatperTable:{
        type : String,
        required : true
    },
    Rate:{
        type : String,
        required : true
    },
    Id:{
        type : String,
        required : true,
        unique : true
    },
    date:{
        type : String,
        required: true
    },
    availableSeat:{
        type:Number
    }
})
const Addseat = mongoose.model('Addseat',ShopseatSchema)
module.exports = Addseat