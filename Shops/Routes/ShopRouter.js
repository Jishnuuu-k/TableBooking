const express = require('express')
const router = express.Router()
const {shopRegister,shopLogin,addSeat,getallSeat,findSeat,availableSeats,getallShops} = require('../Controller/ShopController')
const {verifyToken} = require('../../Middleware/MiddleWare')

router.route('/auth/shopregister').post(shopRegister)
router.route('/auth/shopLogin').post(shopLogin)
router.route('/addseats').post(addSeat)
router.route('/getallseat').get(verifyToken,getallSeat)
router.route('/findSeat/:id').get(findSeat)
router.route('/availableseats').get(verifyToken,availableSeats)
router.route('/getallshop').get(verifyToken,getallShops)
module.exports = router