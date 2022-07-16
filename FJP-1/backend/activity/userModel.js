//tech knowledge  
// (schema) -> set of features and rules a certain entity should 
// follow
// * how to create a db ->  link share
// connect to my app // mongoose 
const mongoose = require('mongoose'); //npm i mongoose
let dblink = "mongodb+srv://admin:<password>@cluster0.ufy4c.mongodb.net/?retryWrites=true&w=majority";
// db connect
mongoose
    .connect(dblink)
    .then(function () {
        console.log("connected");
    })
    .catch(function (err) {
        console.log("error", err);
    })
// how to create a schema-> only entries written will be added to your db no one else 
let userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    confirmPassword: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phonenumber: {
        type: "String",
        minLength: 10,
        maxLength: 10
    },
    pic: {
        type: String,
        default: "dp.png"
    },
    address: {
        type: String,
    }
})
// product Knowledge
// user data -> store
// name,
// email,
// phonenumber,
// pic,
// password,
// address
// ?? -> ??
const UserModel = mongoose.model('FooduserModel', userSchema);
module.exports = UserModel;
