const {shopReg,Shoplog,addSeats} = require ('../UseCause/ShopuseCause')
const {getallSeatFn,findSeatfn,availableSeatFn,getallShopsFn} = require ('../Repo/ShopRepo')
const jwt = require('jsonwebtoken');
 const  shopRegister = (req,res)=>{
    try {
        shopReg(req.body)
        res.json({
            message : "Shop Registered Successfully !" 
        })
    } catch (error) {
        console.error(error)
        res.json({
            message : "Shop Registration Failed  !" 
        })
    }
 }

 const shopLogin = async (req,res)=>{
    try {

        let shop = await Shoplog(req.body)
        console.log(shop)
        const secretKey = 'mySecretKey';
        let token = jwt.sign({shop},secretKey,{expiresIn:'1h'})
        if(shop){
            res.json({
                success:true,
                result:token
            })
        }else{
            res.json({
                success:true,
                result:"Password Or Email is incorrect"
            })
        }
    } catch (error) {
        console.log(error)
    }
 }
const addSeat = async (req) =>{
    try {
        addSeats(req.body)
        console.log(req.body)
    
    } catch (error) {
        console.log(error)
    }
}
const getallSeat = async (req,res) => {
    try {
       let seats = await  getallSeatFn()
       console.log(seats)
       res.json({
            success:true,
            result:seats
       })
    } catch (error) {
        console.log(error)
    }
}
const findSeat = async (req,res)=>{
    try {
        let id = req.params.id;
        console.log(id)
        let seat = await findSeatfn(id)
        res.json({
            success:true,
            result:seat
        })
    } catch (error) {
        console.log(error)
    }
}
const availableSeats = async (req,res) =>{
    try {
        let availableSeat = await availableSeatFn()
        console.log(availableSeat,"available seats . . . .")
    } catch (error) {
        console.log(error)   
    }
}
const getallShops = async (req,res) =>{
    try {
        let getallshopp = await getallShopsFn()
        console.log(getallshopp,"All Shops . . . ")
        res.json({
            Result: getallshopp
        })
    } catch (error) {
        
    }
}
 module.exports = {shopRegister,shopLogin,addSeat,getallSeat,findSeat,availableSeats,getallShops}