const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require("../secrets");
const userModel = require('../model/userModel');
module.exports.protectRoute =
    function protectRoute(req, res, next) {
        try {
            console.log("reached body checker");
            // cookie-parser
            console.log("61", req.cookies)
            // jwt 
            // -> verify everytime that if 
            // you are bringing the token to get your response
            let decryptedToken = jwt.verify(req.cookies.JWT, JWT_SECRET);
            // console.log("66", decryptedToken)
            console.log("68", decryptedToken)
            if (decryptedToken) {
                let userId = decryptedToken.id;
                req.userId = userId
                next();
            } else {
                res.send("kindly login to access this resource ");
            }
        } catch (err) {

            res.status(200).json({
                message: err.message
            })
        }
    }
module.exports.bodyChecker =
    function bodyChecker(req, res, next) {
        console.log("reached body checker");
        let isPresent = Object.keys(req.body).length;
        console.log("ispresent", isPresent)
        if (isPresent) {
            next();
        } else {
            res.send("kind send details in body ");
        }
    }

module.exports.isAuthorized = function (roles) {
    console.log("I will run when the server is started")
    // function call 
    console.log()
    return async function (req, res,next) {
        console.log("Inner function");
        let { userId } = req;
        // id -> user get ,user role,
        try {
            let user = await userModel.findById(userId);
            // console.log("role", user)
            let userisAuthorized = roles.includes(user.role);
            if (userisAuthorized) {
                req.user = user;
                next();
            } else {
                res.status(200).json({
                    message: "user not authorized"
                })
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({
                message: "Server error"
            });
        }
    }

}