// npm init -y
// npm i express
// npm i nodemon -g 
const express = require("express");
// Server: // route  -> request -> response/file 
// File system// path -> interact/type -> file /folder
// server init
const app = express();
// post accept -> folder designate  
app.use(express.static('public'))
app.use(express.json());
// function -> route  path\
// frontend -> req -> /
// getting data from server
// giving data to server
// crud app 
// create
// .form fill
const userRouter = express.Router();
const authRouter = express.Router();
// /api/user/:id
app.use('/api/user', userRouter);
app.use("/api/auth", authRouter);
userRouter
    .route("/")
    .get(getUsers)



userRouter
    .route("/:id")
    .get(getUserById)
    .patch(updateUser)
    .delete(deleteUser)
authRouter
    .post("/signup", setCreatedAt, signupUser)
    .post("/login", loginUser);
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
const userModel = require("./models/userModel");
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
async function getUsers(req, res) {
    try {
        let users = await userModel.find();
        res.status(200).json({
            "message": "list of all the users",
            users: users
        })
    } catch (err) {
        res.status(500).json({
            error: err.message,
            "message": "can't get users"
        })

    }

    // for sending key value pair
}

// ****************************************************

// Homework 
// findBYIdAndUpdate ->
function updateUser(req, res) {
    let obj = req.body;
    for (let key in obj) {
        user[key] = obj[key];
    }
    res.status(200).json(user);
}
// findByIdnDelete
function deleteUser(req, res) {
    user = {}
    res.status(200).json(user);
}
// id
function getUserById(req, res) {
    console.log(req.params);
    res.status(200).send("Hello");
}
// database 
function loginUser(req, res) {
    // email ,password -> userModel -> 
    // email??
    // email -> user get -> password
    // findOne 
}
// planModel
// create , updatePlan ,deletePlan getAllPlans
// ****************************************************



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
    console.log("server started at http://localhost:8080");
})
// / port, ip,localhost