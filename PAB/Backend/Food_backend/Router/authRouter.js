// dependecies 
const express = require("express");
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require("../secrets");
const userModel = require("../model/userModel")
const { bodyChecker } = require("./utilFns");
const emailSender = require("../helpers/emailSender");
// router
const authRouter = express.Router();

// routes 
authRouter.use(bodyChecker)
authRouter.route("/signup").post(signupUser);
authRouter.route("/login").post(loginUser);
authRouter.route("/forgetPassword").post(forgetPassword)
authRouter.route("/resetPassword").post(resetPassword);
// routes -> functions
async function signupUser(req, res) {
    try {
        let newUser = await userModel.create(req.body);
        res.status(200).json({
            "message": "user created successfully",
            user: newUser
        })
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: err.message
        })
    }
}
async function loginUser(req, res) {
    try {
        let { email, password } = req.body;
        let user = await userModel.findOne({ email });
        if (user) {
            // password
            if (user.password == password) {
                let token = jwt.sign({ id: user["_id"] }, JWT_SECRET )

                res.cookie("JWT", token);
                res.status(200).json({
                    data: user,
                    message: "user logged In"
                })
            } else {
                res.status(404).json({
                    message: "email or password is incorrect"
                })
            }
        } else {
            res.status(404).json({
                message:
                    "user not found with creds"
            })
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: err.message
        })
    }
}
async function forgetPassword(req, res) {
    try {
        let { email } = req.body;
        // search on the basis of email
        let user = await userModel.findOne({ email })
        if (user) {
            let token =
                (Math.floor(Math.random() * 10000) + 10000)
                    .toString().substring(1);
            // date.now ->300
            await userModel.updateOne({ email }, { token })
            //    console.log("updateQuery",updateRes)
            // 
            let newUser = await userModel.findOne({ email });
            // console.log("newUser", newUser)
            // email
            // email send
            await emailSender(token, user.email);

            res.status(200).json({
                message: "user token send to your email",
                user: newUser,
                token
            })
        } else {
            res.status(404).json({
                message:
                    "user not found with creds"
            })
        }
        // create token
        // -> update the user with a new token 
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: err.message
        })
    }
}
async function resetPassword(req, res) {
    // token,confirmPassword,password
    // 10 lakh -> 10 lakh users
    // frontend -> local storage  
    try {
        let { token, confirmPassword, password } = req.body;
        let user = await userModel.findOne({ token });
        // console.log("user 108", user);
        if (user) {
            // await userModel.updateOne({ token }, {
            //     token: undefined,
            //     password: password,
            //     confirmPassword: confirmPassword,
            // },{runValidators:true} )
            // server
            // user.password = password;
            // user.confirmPassword = confirmPassword;
            // user.token = undefined;
            user.resetHandler(password,confirmPassword);
            // database entry 
            await user.save();
            let newUser = await userModel.findOne({ email: user.email });
            // console.log("newUser", newUser)
            // email
            // email send
            // await emailSender(token, user.email);
            res.status(200).json({
                message: "user token send to your email",
                user: newUser,
            })
        } else {
            res.status(404).json({
                message: "user with this token not found"
            })
        }

    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: err.message
        })
    }
}

// forget 
// reset
// function tempLoginUser(req, res) {
//     let { email, password } = req.body;
//     let obj = content.find((obj) => {
//         return obj.email == email
//     })
//     if (!obj) {
//         return res.status(404).json({
//             message: "User not found"
//         })
//     }
//     if (obj.password == password) {
//         var token = jwt.sign({ email: obj.email },
//             JWT_SECRET);
//         // header
//         console.log(token);
//         res.cookie("JWT", token);
//         // sign with RSA SHA256
//         // res body 
//         res.status(200).json({
//             message: "user logged In",
//             user: obj
//         })
//     } else {
//         res.status(422).json({
//             message: "password doesn't match"
//         })
//     }
// }
module.exports = authRouter