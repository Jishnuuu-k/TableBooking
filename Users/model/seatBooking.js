const  mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId, // Reference the MongoDB ObjectId type
    email: { type: String, required: true },
    name: { type: String, required: true },
    mobile: { type: String, required: true },
    place: { type: String },
    password: { type: String, required: true }
});

const SeatbookingSchema = new mongoose.Schema({
    Nofseats: {
        type: Number,
        required: true
    },
    Date: {
        type: String,
        required: true
    },
    StartingTime: {
        type: Number,
        required: true
    },
    Id: {
        type: Number,
        required: true
    },
    availableSeat: {
        type: String,
        required: true
    },
    user: {
        type: UserSchema, // Embeds the UserSchema here
        required: true
    }
});

const SeatBooking = mongoose.model('SeatBooking', SeatbookingSchema);
module.exports = SeatBooking;