// npm init -y
// npm i express
const express = require("express");
let fs = require("fs");
const rateLimit = require("express-rate-limit");
const hpp = require("hpp");
const helmet = require("helmet");
const xss = require("xss-clean");
const mongoSanitize = require('express-mongo-sanitize');
// Server: // route  -> request -> response/file 
// File system// path -> interact/type -> file /folder
// server init
const app = express();
// this line 
// post -> /
// app.post("/", function (req, res, next) {
//     let body = req.body;
//     console.log("before", body);
//     next();
// })
// inbuilt methods of express has next already implmeneted
// always use me
//  express json -> req.body add;
app.use(rateLimit({
    max: 100,
    windowMs: 15 * 60 * 1000,
    message:
        "Too many accounts created from this IP, please try again after an hour"
}))
// extra param na ho bas
app.use(hpp({
    whiteList: [
        'select',
        'page',
        'sort',
        'myquery'
    ]
}))
// to set http headers
app.use(helmet());
app.use(express.json());
// cross site scripting 
app.use(xss());
// mongodb query sanatize
app.use(mongoSanitize());
// // function -> route  path
// // frontend -> req -> /
// read data storage
// localhost/user/10 -> post 
let content = JSON.parse(fs.readFileSync("./data.json"));
const userRouter = express.Router();
const authRouter = express.Router();
// localhost / auth / 10-> patch
app.use('/user', userRouter);
app.use('/auth', authRouter);
userRouter
    .route('/')
    // localhost/user -> get
    .get(getUsers)
    // localhost/user -> post
    .post(bodyChecker, createUser);


// userRouter
//     .route("/:id")
//     // localhost/user/10-> post
//     .get(getUser)

// authRouter.route("/").post(signupUser)

// authRouter.route("/:id").patch(forgetPassword)
function createUser(req, res) {
    console.log("create users");

    let body = req.body;
    console.log("req.body", req.body);
    content.push(body);
    // put data storage 
    fs.writeFileSync("./data.json", JSON.stringify(content));
    res.json({ message: content });
}
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
function getUsers(req, res) {
    res.json({ message: content });
}



















app.listen(8081, function () {
    console.log("server started");
})






// app.post("/", function (req, res) {
//     let body = req.body;
//     console.log("after", body);
//     res.json({ message: body })
// })
// app.get("/", function (req, res) {
//     console.log("hello from home page")
//     // res.send("<h1>Hello from Backend</h1>");
//     res.status(200).json(
//         { message: content }
//     )
// })
// app.put("/", function (req, res) {
//     console.log("hello from home page")
//     res.send("<h1>Hello from Backend</h1>");
// })
// app.update("/", function (req, res) {
//     console.log("hello from home page")
//     res.send("<h1>Hello from Backend</h1>");
// })
// app.delete("/", function (req, res) {
//     console.log("hello from home page")
//     res.send("<h1>Hello from Backend</h1>");
// })


// app.get("/user", function (req, res) {
//     console.log("users")
//     // for sending key value pair
//     res.json(obj);
// })
// //localhost:8080 ??



    // / port, ip,localhost