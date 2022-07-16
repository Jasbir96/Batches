// require express 
const express = require("express");
// you have to write it -> app signifies -> your server  
const app = express();
app.use(express.json());
// boday checker -> user defined middleware 
app.post("/simple", function bodyChecker(req, res, next) {
    let data = req.body;
    // Object.keys(data)=>["name","age"]
    let length = Object.keys(data).length;
    // console.log("hello",keysArr.length);
    if (length == 0) {
        res.end("Kindly enter data in the body");
    } else {
        next();
    }
})
app.post("/simple", function (req, res) {
    console.log("data", req.body);
    res.end("simple post output");
})
app.listen(3000, function () {
    console.log("server started at port 3000");
})

// middleware are the functions
// that modifies request and response cycle
