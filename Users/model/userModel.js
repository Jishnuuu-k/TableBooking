const mongoose =  require('mongoose')
const userScema = new  mongoose.Schema({
        email : {
            type:String,
            required: true,
            unique: true,
        },
        name :{
            type:String,
            require:true
        },
        mobile:{
            type:String,
            require:true
        },
        place:{
            type:String,
            require:true
        },
        password:{
            type:String,
            require:true
        }
})

const User = mongoose.model('User', userScema);
module.exports = User;