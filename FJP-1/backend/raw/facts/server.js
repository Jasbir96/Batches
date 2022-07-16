// require express 
const express = require("express");
// you have to write it -> app signifies -> your server  
const app = express();
// if you want to accept data in backend
// get karna hai data from sayhello
// app.get("/sayhello", function (req, res) {
//     // frontend 
//     res.end("Hello fron server");
// })
// get karna hai data from saybye
app.use(express.json());
// class 1 e
app.get("/saybye", function (req, res) {
    // frontend
    res.end("Bye");
})
// req -> represents request
// res-> represents response 
app.get("/sayhello", function (req, res) {
    console.log("data", req.body);
    res.end("get wala hello from server");
})
// post route
app.post("/sayhello", function (req, res) {
    console.log("data", req.body);
    res.end("post wala hello from server");
})
// patch is intended for update
app.patch("/sayhello", function (req, res) {
    console.log("data", req.body);
    res.end("patch wala hello from server");
})
// delete is intended for deletion 
app.delete("/sayhello", function (req, res) {
    console.log("data", req.body);
    res.end("delete wala hello from server");
})
// template route 
app.get("/getProduct/:first/:second", function (req, res) {
    console.log("header me data", req.params.first);
    console.log("header me data", req.params.second);
    // let number = req.params.num;
    let sq = req.params.first * req.params.second;
    res.end(sq + " ");
})
//  3000 -> address of a  server -> on a given machine 
app.listen(3000, function () {
    console.log("server started at port 3000");
})
// console.log("Hello hi hello");
// if server file is running on same machine : localhost:3000

// http port -> ??