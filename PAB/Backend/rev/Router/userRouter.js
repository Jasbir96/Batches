// dependency
const express = require("express");
const userModel =
    require("../model/userModel")
// router
const userRouter = express.Router();
const { protectRoute, bodyChecker } = require("./utilFns");
// routes
userRouter
    .route('/')
    .post(bodyChecker, createUser)
    // localhost/user -> get
    .get(protectRoute, getUsers);
userRouter.route("/:id")
    .get(getUser)
    .patch(bodyChecker, updateUser)
    .delete(bodyChecker, deleteUser)
// functions
async function createUser(req, res) {
    try {

        let user = await userModel.create(req.body);
        res.status(200).json({
            user: user
        });


    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Server error"
        });
    }
}
async function getUser(req, res) {
    let { id } = req.params
    try {
        let users = await userModel.findById(id);
        res.status(200).json({
            "message": users
        })
    } catch (err) {
        res.status(502).json({
            message: err.message
        })
    }
}
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
async function updateUser(req, res) {
    let { id } = req.params;
    try {
        let user = await userModel.findById(id);
        if (user) {
            for (let key in user) {
                user[key] = req.body[key];
            }
            await user.save();
            res.status(200).json({
                user: user
            });
        } else {
            res.status(404).json({
                message: "user not found"
            })
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Server error"
        });
    }
}
async function deleteUser(req, res) {
    let { id } = req.params;
    try {
        let user = await userModel.findByIdAndDelete(id);
        res.status(200).json({
            user: user
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Server error"
        });
    }
}

module.exports = userRouter;

