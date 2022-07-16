// require express 
const express = require("express");
// you have to write it -> app signifies -> your server  
const app = express();
// case:1
// app.get("/simple", function (req, res) {
//     res.end("simple2 output");
// })
// app.get("/simple", function (req, res) {
//     res.end("simple1 output");
// })
// app.get("/simple", function (req, res) {
//     res.end("simple output");
// })

// case 2
// get /post/patch delete 
// app.use(function (req, res) {
//     res.end("use will always run");
// })
// app.post("/simple", function (req, res) {
//     res.end("simple post output");
// })
// app.get("/simple", function (req, res) {
//     res.end("simple get output");
// })
// app.patch("/simple", function (req, res) {
//     res.end("simple patch output");
// })
// app.delete("/simple", function (req, res) {
//     res.end("simple patch output");
// })

// // case 3 
// user defined middleware -> next call  
app.use(function (req, res, next) {
    console.log("use will always run");
        next();
})
app.post("/simple", function (req, res) {
    res.end("simple post output");
})
app.post("/simple", function (req, res) {
    res.end("simple1 post output");
})
app.listen(3000, function () {
    console.log("server started at port 3000");
})
// case 4  pre-defined middleware
app.use(express.json());
app.post("/simple", function (req, res) {
    console.log("data", req.body);
    res.end("simple post output");
})
app.post("/simple", function (req, res) {
    res.end("simple1 post output");
})
app.listen(3000, function () {
    console.log("server started at port 3000");
})


// middleware 