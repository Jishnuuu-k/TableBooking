const Shop = require('../Model/ShopModel')
const Addseat = require('../Model/ShopseatsModel')
module.exports.CreateShop = async(data) =>{
    try {
        await Shop.create(data)
        return true
    } catch (error) {
        console.log(error)
    }
}
module.exports.ShoploginFn = async (data) =>{
    try {
        let shop = await Shop.findOne({Email:data})
        return shop
    } catch (error) {
        console.log(error)
    }
}
module.exports.addSeatFn = async (data) =>{
    try {
        await Addseat.create(data)
        return true
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
module.exports.getallSeatFn = async (data) =>{
    try {
         let seats = await Addseat.find()
         return seats
    } catch (error) {
        
    }
}
module.exports.findSeatfn = async (data)=>{
    try {
        let id = data
        console.log(id)
        let seat = await Addseat.find({Id:id})
        return seat
    } catch (error) {
        console.log(error)
    }
}
module.exports.availableSeatFn =async (data) =>{
    try {
        let availableSeat =  await Addseat.find({ availableSeat: { $gt: "0" } });
        return availableSeat;
    } catch (error) {
        console.log(error)
    }
}
module.exports.getallShopsFn = async () =>{
    try {
        let getallshop = await Shop.find()
        return getallshop
    } catch (error) {
        console.log(error)
    }
}