const userModel = require("../models/userModel");
const express = require('express');
const userRouter = express.Router();
userRouter
    .route("/:id")
    .get(getUserById)
    .patch(updateUser)
    .delete(deleteUser)
// ****************************************************
userRouter
    .route("/")
    .get(protectRoute, getUsers)
// Homework 
// findBYIdAndUpdate ->
async function getUsers(req, res) {
    try {
        let users = await userModel.find();
        res.status(200).json({
            "message": "list of all the users",
            users: users
        })
    } catch (err) {
        res.status(500).json({
            error: err.message,
            "message": "can't get users"
        })
    }

    // for sending key value pair
}

function updateUser(req, res) {
    let obj = req.body;
    for (let key in obj) {
        user[key] = obj[key];
    }
    res.status(200).json(user);
}
// findByIdnDelete
function deleteUser(req, res) {
    user = {}
    res.status(200).json(user);
}
// id
function getUserById(req, res) {
    console.log(req.params);
    res.status(200).send("Hello");
}
let flag = true;
function protectRoute(req, res, next) {
    try {
        if (flag) {
            next();
        } else {
            res.status(401).json({
                message: "You are not allowed"
            })
        }
    } catch (err) {
        res.status(500).json({
            message: "server error"
        })
    }
}
module.exports = userRouter;