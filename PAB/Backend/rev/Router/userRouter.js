// dependency
const express = require("express");
const userModel =
    require("../model/userModel")
// router
const userRouter = express.Router();
const { protectRoute } = require("./utilFns");
// routes
userRouter
    .route('/')
    // localhost/user -> get
    .get(protectRoute, getUsers);
// functions
async function getUsers(req, res) {
    try {
        let users = await userModel.find();
        res.status(200).json({
            "message": users
        })
    } catch (err) {
        res.status(502).json({
            message: err.message
        })
    }
}
module.exports = userRouter;
