const mongoose = require("mongoose");
let { DB_LINK } = require("../secrets");

// connnection form 
mongoose.connect(DB_LINK).then(function (db) {
    console.log(db);
}).catch(function (err) {
    console.log("err", err);
})