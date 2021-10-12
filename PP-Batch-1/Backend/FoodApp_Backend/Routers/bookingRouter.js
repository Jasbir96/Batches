// dependecies
const express = require("express");
const BookingRouter = express.Router();
const protectRoute = require("./authHelper");
const BookingModel = require("../models/bookingModel");
const PlanModel = require("../models/PlanModel");
const factory = require("../helpers/factory");
const getBookings = factory.getElements(BookingModel);
// create -> booking model me change as well as userModel -> change user 
// async function createBooking(req, res) {
//     // status 
// }
// delete  -> booking model me change as well as userModel -> change user 
const updateBooking = factory.updateElement(BookingModel);
const getBookingById = factory.getElementById(BookingModel);
BookingRouter.use(protectRoute);
BookingRouter
    .route("/:id")
    .get(getBookingById)
    .patch(updateBooking)
// .delete(deleteBooking)
// ****************************************************
BookingRouter
    .route("/")
    .get(getBookings)
    // .post(createBooking);
// cron job -> 5 second -> average rating 

module.exports = BookingRouter;

