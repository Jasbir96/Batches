const express = require("express");
const app = express();
// npm i cookie parser
const cookieParser = require("cookie-parser");
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
                    res.cookie("token", "sample value");
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

// locahost:3000 -> express API 
app.listen(3000, function () {
    console.log("server started at port 3000");
})
function protectRoute(req, res, next) {
    console.log(req.cookies);
    console.log("protect Route Encountered");
    // you are logged In then it will allow next fn to run

    next();
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