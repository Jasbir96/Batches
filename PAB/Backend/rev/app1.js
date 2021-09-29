// npm init -y
// npm i express
const { next } = require("cheerio/lib/api/traversing");
const express = require("express");
let fs = require("fs");
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
// inbuilt menthods of express has next already implmeneted
// always use me
//  express json -> req.body add  
app.use(express.json());

// // function -> route  path
// // frontend -> req -> /
// read data storage
// localhost/user/10 -> post 
// let content = JSON.parse(fs.readFileSync("./data.json"));
// const userRouter = express.Router();
// const authRouter = express.Router();
// // localhost / auth / 10-> patch
// app.use('/user', userRouter);
// app.use('/auth', authRouter);
// userRouter
    // .route('/')
    // localhost/user -> get
    // .get(getUsers)
    // localhost/user -> post
    // .post(bodyChecker, isAuthenticated, isAuthorized, createUser);


// userRouter
//     .route("/:id")
//     // localhost/user/10-> post
//     .get(getUser)

// authRouter.route("/").post(signupUser)

// authRouter.route("/:id").patch(forgetPassword)
// function createUser(req, res) {
//     console.log("create users");

//     let body = req.body;
//     console.log("req.body", req.body);
//     content.push(body);
//     // put data storage 
//     fs.writeFileSync("./data.json", JSON.stringify(content));
//     res.json({ message: content });
// }
// function bodyChecker(req, res, next) {
//     console.log("reached body checker");
//     let isPresent = Object.keys(req.body).length;

//     console.log("ispresent", isPresent)
//     if (isPresent) {
//         next();
//     } else {
//         res.send("kind send details in body ");
//     }
// }
// function getUsers(req, res) {
//     res.json({ message: content });
// }

app.listen(8081, function () {
    console.log("server started");
})


app.post("/", function (req, res, next) {
    let body = req.body;
    console.log("inside first post", body);
    next();
})
app.use(function (req, res, next) {
   console.log("inside app.use",)
    next();
})
app.get("/", function (req, res) {
    let body = req.body;
    console.log("inside first get", body);

})
app.post("/", function (req, res, next) {
    let body = req.body;
    console.log("inside second post ", body);
    res.send("tested next");
})
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