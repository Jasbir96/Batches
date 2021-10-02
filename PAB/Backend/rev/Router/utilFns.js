const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require("../secrets");
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