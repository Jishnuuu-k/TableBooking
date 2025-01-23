const userModel = require('../model/userModel')
const SeatBooking = require('../model/seatBooking')
const SeatModel = require('../../Shops/Model/ShopseatsModel')
module.exports.CreateUser = async (data)=>{
        try {
         await   userModel.create(data)
         return true
        } catch (error) {
            console.log(error)
        }
}
module.exports.UserLoginFn = async (data)=>{
    try {
        let user = await userModel.find({email:data})
        return user;
    } catch (error) {
        console.log(error)
    }
}
module.exports.getalluserFn = async() =>{
    try {
        let getalluserr = await userModel.find()
        return getalluserr;
    } catch (error) {
        console.log(error)
    }
}
module.exports.seatBookingFn = async(data) =>{
    try {
        console.log(data,"--data")
        
       let tableData =  await SeatModel.find({Id:data})
        return tableData
    } catch (error) {
        console.log(error)
    }
}
module.exports.addSeatBookingFn = async(data) =>{
    try {
        console.log(data,"--data")
        
       let tableDataa =  await SeatBooking.create(data)
        return tableDataa
    } catch (error) {
        console.log(error)
    }
}
module.exports.seatAvailabilityFn = async(data) =>{
    try {
        let tableData =  await SeatModel.find({Id:data})
        return tableData
    } catch (error) {
        
    }
}
module.exports.BookSeatWithUser = async(data,inputs)=>{
    try {
        console.log(data,inputs," in repo")
        let user = await userModel.find({_id:data.id})
        user = user[0]
        console.log(user,"user find")
        let userInputs = inputs;
        userInputs.user = user;
        console.log(userInputs,"userinputs new data")
        let added = await SeatBooking.create(userInputs)
        console.log(added,"added")
        return added
    } catch (error) {
       console.log(error) 
    }
}