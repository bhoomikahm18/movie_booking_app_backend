const express = require('express');
const { newBooking } = require('../controllers/booking_controller.js');

const bookingsRouter = express.Router();

bookingsRouter.post("/newbooking", newBooking);

module.exports = bookingsRouter;