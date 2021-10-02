const userModel = require("../models/userModel");
const express = require('express');
const userRouter = express.Router();
const protectRoute = require("./authHelper");
userRouter
    .route("/:id")
    .get(protectRoute, authorizeUser(["admin", "manager"]), getUserById)
    .patch(updateUser)
    .delete(protectRoute, authorizeUser(["admin"]), deleteUser);
// ****************************************************
userRouter
    .route("/")
    .get(protectRoute, getUsers);
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
// Logic ??
function authorizeUser(rolesArr) {
    return async function (req, res, next) {
        let uid = req.uid;
        let { role } = await userModel.findById(uid);
        let isAuthorized = rolesArr.includes(role);
        if (isAuthorized) {
            next();
        } else {
            res.status(403).json({
                message: "user not authorized contact admin"
            })
        }

    }
}
module.exports = userRouter;