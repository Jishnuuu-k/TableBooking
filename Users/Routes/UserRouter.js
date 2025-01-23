const express = require('express');
const {userLogin,userRegistration,getallusers,seatBooking,SeatAvailabilitycheck} = require('../Controller/userController')
const {verifyToken} = require('../../Middleware/MiddleWare')
const router = express.Router()
 
router.route('/auth/userLogin').post(userLogin)
router.route('/auth/userRegister').post(userRegistration)
router.route('/getallusers').get(verifyToken, getallusers)
router.route('/seatBooking').post(seatBooking)
router.route('/SeatAvailabilitycheck').post(SeatAvailabilitycheck)
module.exports = router