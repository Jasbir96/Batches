const express = require("express");

// router
const bookingRouter = express.Router();
const bookingModel = require("../model/bookingModel");
const UserModel = require("../model/userModel");
const { protectRoute } = require("./utilFns")
const {
    getElement, getElements,
    updateElement,
} = require("../helpers/factory");
const updatebooking = updateElement(bookingModel);
const getbooking = getElement(bookingModel);
const getbookings = getElements(bookingModel);
// createbooking
const initiateBooking = async function (req, res) {
    try {
        let booking = await bookingModel.create(req.body);
        let bookingId = booking["_id"];
        let userId = req.body.user;
        let user = await userModel.findById(userId);
        user.bookings.push(bookingId);
        await user.save();
        res.status(200).json({
            message: "booking created",
            booking: booking
        })
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}
const deletebooking = async function (req, res) {
    try {
        let booking = await bookingModel.findByIdAndDelete(req.body.id);
        console.log("booking", booking);
        let userId = booking.user;
        let user = await userModel.findById(userId);
        let idxOfbooking = user.bookings.indexOf(booking["_id"]);
        user.booking.splice(idxOfbooking, 1);
        await user.save();
        res.status(200).json({
            message: "booking deleted",
            booking: booking
        })
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
};
// deletebooking
bookingRouter
    .route("/:id")
    .get(getbooking)
    .patch(protectRoute, updatebooking)
    .delete(protectRoute, deletebooking)
// ****************************************************
bookingRouter
    .route("/")
    .get(getbookings)
    // create -> payment done 
    .post(protectRoute, initiateBooking);

module.exports = bookingRouter;


