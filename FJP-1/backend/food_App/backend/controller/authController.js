const jwt = require("jsonwebtoken");
const secrets = require("../secrets");
const FooduserModel = require("../model/userModel");
const mailSender = require("../utilities/mailSender")
// ************************controller functions************************
async function signupController(req, res) {
    try {
        let data = req.body;
        console.log(data);
        // to create a document inside userModel
        let newUser = await FooduserModel.create(data);
        console.log(newUser);
        res.status(201).json({
            result: "user signed up"
        });
    } catch (err) {
        res.status(400).json({
            result: err.message
        }
        );
    }
}
async function loginController(req, res) {
    try {
        let data = req.body;
        let { email, password } = data;
        if (email && password) {
            let user = await FooduserModel.findOne({ email: email });
            if (user) {
                if (user.password == password) {
                    // create JWT ->-> payload, secret text 
                    const token = jwt.sign({
                        data: user["_id"],
                        exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24)
                    }, secrets.JWTSECRET);
                    // put token into cookies
                    res.cookie("JWT", token);
                    // send the token 
                    user.password = undefined;
                    user.confirmPassword = undefined;
                    console.log("login", user);
                    // before sending to frontend 
                    res.status(200).json({ //1
                        user
                    });
                } else {
                    // email or password missmatch
                    res.status(400).json({ //2
                        result: "email or password does not match"
                    })
                }
            } else {
                // user not found
                res.status(404).json({ //3 
                    result: "user not found"
                })
            }
        } else {
            // something is missing
            res.status(400).json({ //4
                result: "user not found kindly signup"
            });
        }
    } catch (err) {
        // server crashed
        res.status(500).json({
            result: err.message
        }
        );
    }
}
async function resetPasswordController(req, res) {
    try {
        let { otp, password, confirmPassword, email } =
            req.body;
        // search -> get the user
        let user = await FooduserModel.findOne({ email: email });
        let currentTime = Date.now();
        if (currentTime > user.otpExpiry) {
            delete user.otp
            delete user.otpExpiry
            await user.save();
            res.status(200).json({
                result: "Otp Expired"
            })
        } else {
            if (user.otp != otp) {
                res.status(200).json({
                    result: "wrong otp"
                })
            } else {
                // //////////////////////////
                user = await FooduserModel.findOneAndUpdate(
                    { otp, email },
                    { password, confirmPassword },
                    {
                        runValidators: true,
                        new: true
                    });
                delete user.otp
                delete user.otpExpiry
                await user.save();
                //////////////////////////////////////////////////////////////
                res.status(201).json({
                    user: user,
                    message: "User password reset"
                })
            }
        }
        // key delete -> get the document obj -> modify that object by removing useless keys  
        // save to save this doc in db 
        console.log(user);

    } catch (err) {
        console.log(err);
        res.status(500).json({
            result: err.message
        });
    }
}
async function forgetPasswordController(req, res) {
    try {
        let { email } = req.body;
        //    mail
        // by default -> FindAndUpdate -> not updated send document, 
        // new =true -> you will get updated doc
        // email -> do we have a user -> no user 
        // update
        let user = await FooduserModel.findOne({ email });
        if (user) {
            let otp = otpGenerator();
            let afterFiveMin = Date.now() + 5 * 60 * 1000;
            await mailSender(email, otp);
            user.otp = otp;
            user.otpExpiry = afterFiveMin;
            await user.save();
            res.status(204).json({
                data: user,
                result: "Otp send to your mail"
            })
        } else {
            res.status(404).json({
                result: "user with this email not found"
            })
        }
    } catch (err) {
        res.status(500).json(err.message);
    }
}
function protectRoute(req, res, next) {
    try {
        const cookies = req.cookies;
        const JWT = cookies.JWT;
        if (cookies.JWT) {
            console.log("protect Route Encountered");
            // you are logged In then it will 
            // allow next fn to run
            let token = jwt.verify(JWT, secrets.JWTSECRET);
            console.log("Jwt decrypted", token);
            let userId = token.data
            console.log("userId", userId);
            req.userId = userId;

            next();
        } else {
            res.send("You are not logged In Kindly Login");
        }
    } catch (err) {
        console.log(err);
        if (err.message == "invalid signature") {
            res.send("TOken invalid kindly login");
        } else {

            res.send(err.message);
        }
    }

}
// ******************helper function************************************************
function otpGenerator() {
    return Math.floor(100000 + Math.random() * 900000);
}
// user update
// delete

module.exports = {
    signupController,
    loginController,
    resetPasswordController,
    forgetPasswordController,
    protectRoute
}