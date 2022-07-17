//tech knowledge  
// (schema) -> set of features and rules a certain entity should 
// follow
// * how to create a db ->  link share
// connect to my app // mongoose 
const mongoose = require('mongoose'); //npm i mongoose
// db server link -> mongodb atlas ka link
let dblink =
    "mongodb+srv://admin:BohYctQDD0twhLoA@cluster0.ufy4c.mongodb.net/?retryWrites=true&w=majority";
// db  server connect -> mongodbAtlas connect 
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
        required: [true, "Name is not send"],
    },
    password: {
        type: String,
        required: [true, "password is missing"]
    },
    confirmPassword: {
        type: String,
        required: [true, "confirmPassword is missing "],
        // custom validator
        validate: {
            validator: function () {
                // return true -> value that is valid
                // return false -> value that is not valid  
            },
            //    error message
            message: "password miss match"
        },
    },
    email: {
        type: String,
        required: [true, "email is missing"],
        unique: true
    },
    phonenumber: {
        type: String,
        minLength: [10, "less then 10 numbers"],
        maxLength: 10
    },
    pic: {
        type: String,
        default: "dp.png"
    }, days: {
        type: String,
        enum: ["Mon", "Tue", "Wed"]
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
// model is similar to your collection 
const UserModel = mongoose.model
    // name of the collection, the set of rules this collection should follow
    ('FooduserModel', userSchema);
module.exports = UserModel;
