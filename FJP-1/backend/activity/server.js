const express = require("express");
const app = express();
// npm i cookie parser
const cookieParser = require("cookie-parser");
// jsonwebtoken
const jwt = require("jsonwebtoken");
const secrets = require("./secrets");
// token name is -> JWT & mechanism -> cookies
// repersent -> collection
const FooduserModel = require("./userModel");
// to  add post body data to req.body
app.use(express.json());
// add cookies to req.cookies
app.use(cookieParser());
app.post("/signup", async function (req, res) {
    try {
        let data = req.body;
        console.log(data);
        // to create a document inside userModel
        let newUser = await FooduserModel.create(data);
        console.log(newUser);
        res.end("data recieved");
    } catch (err) {
        res.end(err.message);
    }
})
// login input: email + password:
app.post("/login", async function (req, res) {
    try {
        let data = req.body;
        let { email, password } = data;
        if (email && password) {
            let user = await FooduserModel
                .findOne({ email: email });
            if (user) {
                if (user.password == password) {
                    // create JWT ->-> payload, secret text 
                    // ,algorithms-> SHA256
                    const token = jwt.sign({
                        data: user["_id"],
                        exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24)
                    }, secrets.JWTSECRET);
                    // put token into cookies
                    res.cookie("JWT", token);
                    // send the token 
                    res.send("user logged In");
                } else {
                    res.send("email or password does not match");
                }
            } else {
                res.send(`User with this email Id is not found.
                 kindly signup`);
            }
        } else {
            res.end(" kindly enter email and password both");
        }
    } catch (err) {
        res.end(err.message);
    }
})
// users -> get all the users -> sensitive route -> protected route -> logged in i will only allow that person 
app.get("/users", protectRoute, async function (req, res) {
    try {
        let users = await FooduserModel.find();
        // to send json data ;
        res.json(users);
    } catch (err) {
        res.end(err.message);
    }
})
app.get("/user", protectRoute, async function (req, res) {
    // user profile ka data show 
    try {
        const userId = req.userId;
        const user = await FooduserModel.findById(userId);
        res.json({
            data: user,
            message: "Data about logged in user is send"
        });
        // model by Id -> get
        // res-> send 
    } catch (err) {
        res.end(err.message);

    }

})

// locahost:3000 -> express API 
app.listen(3000, function () {
    console.log("server started at port 3000");
})
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
            console.log("userId",userId);
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


// create -> deleteUser, updateUser
// {
//     name: 'Jasbir',
//     password: 'abcd',
//     confirmPassword: 'abcd',
//     email: 'abc@gmail.com',
//     phonenumber: '8800953687',
//     pic: 'dp.png',
// -> unnique id
//     _id: new ObjectId("62d2f2c0aaa6d2fe55d1e68c"),
// mongoose
//     __v: 0
//   }