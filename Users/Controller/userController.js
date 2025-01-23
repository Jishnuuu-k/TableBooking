const  {userReg,checkUserLogin,seatBookin,SeatAvailability} = require('../useCause/userUseCause')
const {getalluserFn} =require('../Repo/userRepo')
const jwt = require('jsonwebtoken');

const userRegistration = (req,res)=>{
        try {
            userReg(req.body)
           res.json({
            message:'user created',
            success:true
           })
        } catch (error) {
            console.log(error)
            res.json({
                message:"Task Failed",
                success:true
            })
        }
}

const userLogin = async (req,res)=>{
    try {
        
       let user = await checkUserLogin(req.body)
       console.log(user,"@Controller")
       const secretKey = 'mySecretKey';
       let token = jwt.sign({id: user._id},secretKey,{expiresIn:'1h'})
            if(user){
                res.json({
                    success:true,
                    result:token,
                    data : user
                })
            }else{
                res.json({
                    success:true,
                    result:"Password Or Email is incorrect"
                })
            }
        } catch (error) {
            console.log(error)
            res.send(error)
            }
}
const getallusers = async (req,res) =>{
    try {
        console.log(req.headers["authorization"])
        let getalluser = await getalluserFn()
        res.json({
            success:true,
            result:getalluser
        })
    } catch (error) {
        console.log(error)
    }
}
const seatBooking = async (req,res) =>{
    try {
      let TotalRate = await seatBookin(req.body)
      console.log("Total Costs :",TotalRate)
      res.json({
        TotalCost:TotalRate
      })
    } catch (error) {
        console.log(error)
    }
}
const SeatAvailabilitycheck = async (req,res) =>{
    try {
        console.log(req.headers['authorization'],"userdatain jwt")
        const payload = jwt.verify(req.headers['authorization'], "mySecretKey");
        console.log(payload,"payload")
        let body = req.body
        let Data = {
            body,
            payload
        }
      let added = await  SeatAvailability(Data)
      if(added){
        res.json({success:true})
      }else{
        console.log("not aaded to bookings")
      }
    } catch (error) {
        console.log(error)
    }
}
module.exports = {userRegistration,userLogin,getallusers,seatBooking,SeatAvailabilitycheck}