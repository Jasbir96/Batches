//tech knowledge  
// (schema) -> set of features and rules a certain entity should 
// follow
// * how to create a db ->  link share
// connect to my app // mongoose 
const mongoose = require('mongoose');
let dblink = "mongodb+srv://admin:<password>@cluster0.ufy4c.mongodb.net/?retryWrites=true&w=majority";
mongoose
    .connect(dblink)
    .then(function () {
        console.log("connected");
    })
    .catch(function (err) {
        console.log("error", err);
    })
// how to create a schema
// product Knowledge
// user data -> store
// name,
// email,
// phonenumber,
// pic,
// password,
// address

//  how store values in it