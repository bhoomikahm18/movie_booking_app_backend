const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
        minLength: 6,
    },
    bookings: [{type: mongoose.Types.ObjectId, ref: "Booking"}]
})

module.exports = mongoose.model("User", userSchema)