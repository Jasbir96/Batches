// npm init -y
// npm i express
const express = require("express");
const fs = require("fs");
const path = require("path");
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
// reserve a folder only from which client can acces the files 
app.use(express.static("Frontend_folder"));
app.use(express.json());

// // function -> route  path
// // frontend -> req -> /
// read data storage
// localhost/user/10 -> post 
let content = JSON.parse(fs.readFileSync("./data.json"));
const userRouter = express.Router();
const authRouter = express.Router();
// // localhost / auth / 10-> patch
app.use('/user', userRouter);
app.use('/auth', authRouter);
userRouter
    .route('/')
    // localhost/user -> get
    .get(protectRoute, getUsers)
//     localhost/user -> post
//     .post(bodyChecker, isAuthenticated, isAuthorized, createUser);
// userRouter
//     .route("/:id")
//     // localhost/user/10-> post
//     .get(getUser)

authRouter.route("/signup")
    .post(bodyChecker, signupUser);
authRouter.route("/login")
    .post(bodyChecker, loginUser);
function getUsers(req, res) {
    res.status(200).json({
        "message": content
    })
}
function protectRoute(req, res, next) {
    console.log("reached body checker");
    // jwt 
    // -> verify everytime that if 
    // you are bringing the token to get your response
    let isallowed = false;
    if (isallowed) {
        next();
    } else {
        res.send("kindly login to access this resource ");
    }
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
function signupUser(req, res) {
    let { name, email, password,
        confirmPassword } = req.body;
    console.log("req.body", req.body)
    if (password == confirmPassword) {
        let newUser = { name, email, password }
        // entry put 
        content.push(newUser);
        // save in the datastorage
        fs.writeFileSync("data.json",
            JSON.stringify(content));
        res.status(201).json({
            createdUser: newUser
        })
    } else {
        res.status(422).json({
            message:
                "password and confirm password do not match"
        })
    }
}

function loginUser(req, res) {
    let { email, password } = req.body;
    let obj = content.find((obj) => {
        return obj.email == email
    })
    if (!obj) {
        return res.status(404).json({
            message: "User not found"
        })
    }
    if (obj.password == password) {
        
        res.status(200).json({
            message: "user logged In",
            user: obj
        })
    } else {
        res.status(422).json({
            message: "password doesn't match"
        })
    }
}
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
app.use(function (req, res) {
    // console.log("fullPath", fullPath);
    res.status(404).sendFile
        (path.join(__dirname, "404.html"));
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