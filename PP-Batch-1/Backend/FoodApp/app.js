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

let user = {
};
// getting data from server
// giving data to server
// crud app 
// create
// .form fill
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

// mounting in express 
const router = express.Router();
// /api/user/:id
app.use('/api/user', router);

router
    .route("/")
    .get(getUser)
    .post(createUser)
    .patch(updateUser)
    .delete(deletUser);
router
    .route("/:id")
    .get(getUserById);

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