// npm init -y
// npm i express
const express = require("express");
// Server: // route  -> request -> response/file 
// File system// path -> interact/type -> file /folder
// server init
const app = express();
// function -> route  path
// frontend -> req -> /
app.get("/", function (req, res) {
    console.log("hello from home page")
    res.send("<h1>Hello from Backend</h1>");
})
let obj = {
    name: "jasbir"
}
app.get("/user", function (req, res) {
    console.log("users")
    // for sending key value pair
    res.json(obj);
})
//localhost:8080 ??
app.listen(8081, function () {
    console.log("server started");
})

    // / port, ip,localhost