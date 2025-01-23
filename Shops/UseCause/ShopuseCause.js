const {CreateShop,ShoploginFn,addSeatFn} = require('../Repo/ShopRepo')
const bcrypt = require('bcryptjs');
module.exports.shopReg = async(data) => {
   try {
    let {Password} = data
    const saltRound = 10;
    const HashedPasswrd = await bcrypt.hash(Password,saltRound);
    data.Password = HashedPasswrd;
    await CreateShop(data)
    return true
   } catch (error) {
    console.log(error)
   }
}

module.exports.Shoplog = async (data)=>{
    try {
        console.log(data)
        let {Email} = data;
        let shop = await ShoploginFn(Email)
         let result = await bcrypt.compare(data.Password,shop.Password)
         console.log("password checking",result)
         if(result == true){
            return shop
         }else{
            return false 
         }
    } catch (error) {
        console.log(error)
    }
}

module.exports.addSeats = async (data) =>{
   try {
      let date = new Date()
      data.date = date.toISOString().split("T")[0];
      addSeatFn(data)
   } catch (error) {
    console.log(error)  
   }
}
