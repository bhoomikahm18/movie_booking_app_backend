const mongoose = require("mongoose");
const Bookings = require("../models/Bookings");
const Movie = require("../models/Movie.js");
const User = require("../models/User.js");


module.exports.newBooking = async (req, res, next) => {
    const { movie, date, seatNumber, user } = req.body;

    let existingMovie;
    let existingUser;
    try {
        existingMovie = await Movie.findById(movie);
        existingUser = await User.findById(user);
    } catch (err) {
        return console.log(err);
    }
    if (!existingMovie) {
        return res.status(404).json({ message: "Movie Not Found With Given ID" });
    }
    if (!user) {
        return res.status(404).json({ message: "User not found with given ID " });
    }
    let booking;

    try {
        booking = new Bookings({
            movie,
            date: new Date(`${date}`),
            seatNumber,
            user,
        });
        const session = await mongoose.startSession();
        session.startTransaction();
        existingUser.bookings.push(booking);
        existingMovie.bookings.push(booking);
        await existingUser.save({ session });
        await existingMovie.save({ session });
        await booking.save({ session });
        session.commitTransaction();
    } catch (err) {
        return console.log(err);
    }

    if (!booking) {
        return res.status(500).json({ message: "Unable to create a booking" });
    }

    return res.status(201).json({ booking });
};
