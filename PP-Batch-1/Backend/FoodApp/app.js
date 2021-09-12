// npm init -y
// npm i express
// npm i nodemon -g 

const express = require("express");
// Server: // route  -> request -> response/file 
// File system// path -> interact/type -> file /folder
// server init
const app = express();
// post accept 
app.use(express.json());
// function -> route  path
// frontend -> req -> /
app.get("/", function (req, res) {
    console.log("hello from home page")
    res.send("<h1>Hello from Backend</h1>");
})
let user = {
};
// getting data from server
// giving data to server
// crud app 
// create
app.post("/user", function (req, res) {
    console.log("req.data", req.body);
    user = req.body;
    res.status(200).send("data recieved and user added ");
})
// get
app.get("/user", function (req, res) {
    console.log("users")
    res.json(user);
    // for sending key value pair
})
//update
app.patch("/user", function (req, res) {
    let obj = req.body;
    for (let key in obj) {
        user[key] = obj[key];
    }
    res.status(200).json(user);
})
//delete
app.delete("/user", function (req, res) {
    user = {}
    res.status(200).json(user);
})

//template routes 
app.get("/user/:id", function (req, res) {
    console.log(req.params);
    res.status(200).send("Hello");
})
//localhost:8080 ??
app.listen(8080, function () {
    console.log("server started");
})
// / port, ip,localhost