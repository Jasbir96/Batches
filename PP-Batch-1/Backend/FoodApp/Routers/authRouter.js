const userModel = require("../models/userModel");
const express = require('express');
const jwt = require('jsonwebtoken');
const { JWT_KEY } = require("../secrets");
const authRouter = express.Router();

authRouter
    .post("/signup", setCreatedAt, signupUser)
    .post("/login", loginUser)
// middleware 
function setCreatedAt(req, res, next) {
    // {}
    let body = req.body;
    let length = Object.keys(body).length;
    if (length == 0) {
        return res.status(400).json({
            message: "can't create user when body i empty "
        })
    }
    req.body.createdAt = new Date().toISOString();
    // return res.json({
    //     text: "Bye bye "
    // })
    next();
}
// let flag = true;
// authRouter.get("/private",fn1,fn2)
// let user = [];
async function signupUser(req, res) {
    //email,user name ,password
    try {
        let userObj = req.body;
        console.log("userObj", req.body);
        let user = await userModel.create(userObj);
        console.log("user", user);
        // put database 
        // user.push({
        //     email, name, password
        // })
        res.status(200).json({
            message: "user created",
            createdUser: user
        })
    } catch (err) {
        res.status(500).json({
            message: err.message
        })

    }
}
// function createUser(req, res) {
//     console.log("req.data", req.body);
//     user = req.body;
//     res.status(200).send("data recieved and user added ");
// }
// find

// database 

// encrypt
// login -> flag 
async function loginUser(req, res) {
    // email ,password -> userModel ->
    try {
        if (req.body.email) {
            let user = await userModel.findOne({ "email": req.body.email })
            if (user) {
                if (user.password == req.body.password) {
                    // header 
                    let payload = user["_id"];
                    // console.log(JWT_KEY)
                    let token = jwt.sign({ id: payload }, JWT_KEY);
                    res.cookie("jwt", token, {
                        httpOnly: true,
                    })
                    return res.status(200).json({
                        user,
                        "message": "user logged in "
                    })
                } else {
                    return res.status(401).json({
                        "message": "Email or password is wrong"
                    })
                }
            } else {
                return res.status(401).json({
                    "message": "Email or password is wrong"
                })
            }

        } else {
            return res.status(403).json({
                message: "Email is not present"
            })
        }

    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: err.message

        })

    }
    // email??
    // email -> user get -> password
    // findOne 
}
let flag = true;

// forget
// reset
// protect Route 
module.exports = authRouter;