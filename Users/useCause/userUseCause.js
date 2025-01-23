const bcrypt = require('bcryptjs')
const {CreateUser,UserLoginFn,seatBookingFn,addSeatBookingFn,seatAvailabilityFn,BookSeatWithUser} = require('../Repo/userRepo')
module.exports.userReg = async (data)=>{
    try {   
        let {password} = data
        const saltRound = 10;
        const HashedPasswrd =  await bcrypt.hash(password,saltRound);
        data.password = HashedPasswrd;
          await CreateUser(data)
          return true
    } catch (error) {
        console.log(error)
    }
}
module.exports.checkUserLogin = async (data)=>{
    try {
        let {email} = data;
        let user = await UserLoginFn(email)
        user = user[0];
         let result = await bcrypt.compare(data.password,user.password)
         if(result == true){
            return user
         }else{
            return false 
         }
    } catch (error) {
        console.log(error)
    }
}
module.exports.seatBookin = async(data) =>{
    try {
             let {Id} = data
             let tableData = await  seatBookingFn(Id)
             tableData= tableData[0];
             let {Nofseats} = data
             console.log(tableData,"tabledata From Shop SeatModel")
             console.log(data,"User Entered Data")
             let ratePerSeat = tableData.Rate / tableData.SeatperTable
             let TotalRate = Nofseats * ratePerSeat;

             let updatedSeat = parseInt(tableData.availableSeat )- parseInt(data.Nofseats)
             data.availableSeat = updatedSeat;
             addSeatBookingFn(data)
             console.log(data,"Available Seats Updated")
             return (TotalRate)
    } catch (error) {
            console.log(error)  
           }
}
module.exports.SeatAvailability = async(data) =>{
    try {
        console.log(data,"from controller")
        const { Id, Date, Nofseats } = data.body
        let user_id = data.payload;
        let tableData = await seatAvailabilityFn(Id)
        console.log(tableData,"Table Data")
        const inputDate = Date.split("-").reverse().join("-")
        console.log(inputDate,"Date Reversed")

        const UserDate = tableData[0].date
        const availableSeat = tableData[0].availableSeat

        console.log(UserDate,inputDate,"checking for dates")
        if(inputDate === UserDate){
            if (parseInt(Nofseats) <= availableSeat) {
                console.log("Booked")
                        data.body.availableSeat = parseInt(availableSeat) - parseInt(Nofseats)
             await   BookSeatWithUser(user_id,data.body)
             return true;
            }else{
                console.log("Available seat count :",availableSeat)
                return false
            }
        }
    } catch (error) {
        console.log(error)
        return false
    }
}