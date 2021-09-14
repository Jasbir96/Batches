// npm init -y
// npm i express
// npm i nodemon -g 
const express = require("express");
// Server: // route  -> request -> response/file 
// File system// path -> interact/type -> file /folder
// server init
const app = express();
// post accept -> folder designate  

// function -> route  path
// frontend -> req -> /

// getting data from server
// giving data to server
// crud app 
// create
// .form fill
app.use(express.static('public'))
app.use(express.json());
const userRouter = express.Router();
const authRouter = express.Router();
// /api/user/:id
app.use('/api/user', userRouter);
app.use("/api/auth", authRouter);
userRouter
    .route("/")
    .get(getUser)
    .post(createUser)
    .patch(updateUser)
    .delete(deletUser);
userRouter
    .route("/:id")
    .get(getUserById);
authRouter
    .post("/signup", signupUser)
    .post("/login", loginUser);
// database 
let user = [];
function signupUser(req, res) {
    //email,user name ,password
    let { email, password, name } = req.body;
    console.log("user", req.body);
    user.push({
        email, name, password
    })
    res.status(200).json({
        message: "user created",
        createdUser: req.body
    })
}
function createUser(req, res) {
    console.log("req.data", req.body);
    user = req.body;
    res.status(200).send("data recieved and user added ");
}
function getUser(req, res) {
    console.log("users")
    res.json(user);
    // for sending key value pair
}
function updateUser(req, res) {
    let obj = req.body;
    for (let key in obj) {
        user[key] = obj[key];
    }
    res.status(200).json(user);
}
function deletUser(req, res) {
    user = {}
    res.status(200).json(user);
}
function getUserById(req, res) {
    console.log(req.params);
    res.status(200).send("Hello");
}

function loginUser(req, res) {

}

// mounting in express 


// app.post("/api/user", getUser);
// // get
// app.get("/api/user", createUser);
// //update
// app.patch("/api/user", updateUser);
// //delete
// app.delete("/api/user", deletUser);
//template routes 
// app.get("api/user/:id", getUserById);

//localhost:8080 ??
app.listen(8080, function () {
    console.log("server started");
})
// / port, ip,localhost