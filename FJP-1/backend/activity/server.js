const express = require("express");
const app = express();
const UserModel = require("./userModel");
// signup  input:
// name,
// password,
// confirmpassword
// address
// email,
// phonenumber,
// pic,
app.use(express.json());
app.post("/signup", async function (req, res) {
    let data = req.body;
    console.log(data);
    // to create 
    let newUser = await UserModel.create(data);
    console.log(newUser);
    res.end("data recieved");
})

// login input: email + password:
app.listen(3000, function () {
    console.log("server started at port 3000");
})
// {
//     name: 'Jasbir',
//     password: 'abcd',
//     confirmPassword: 'abcd',
//     email: 'abc@gmail.com',
//     phonenumber: '8800953687',
//     pic: 'dp.png',
// -> unnique id
//     _id: new ObjectId("62d2f2c0aaa6d2fe55d1e68c"),
// mongoose
//     __v: 0
//   }