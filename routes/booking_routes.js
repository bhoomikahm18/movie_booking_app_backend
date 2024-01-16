const express = require('express');
const { newBooking, getBookingById, deleteBooking } = require('../controllers/booking_controller.js');

const bookingsRouter = express.Router();

bookingsRouter.post("/newbooking", newBooking);
bookingsRouter.get("/:id", getBookingById);
bookingsRouter.delete("/:id", deleteBooking);

module.exports = bookingsRouter;