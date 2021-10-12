const mongoose = require("mongoose");
const emailValidator = require("email-validator")
let { DB_LINK } = require("../secrets");
// link
// connnection form 
mongoose.connect(DB_LINK, {

}).then(function () {
    // console.log(db);
    console.log("connected to db")
}).catch(function (err) {
    console.log("err", err);
})
// syntax 
const planSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "kindly pass the name"],
        unique: true,
        // errors
        maxlength: [40, "Your plan length is more than 40 characters"],
    },
    duration: {
        type: Number,
        required: [true, "You Need to provide duration"]
    },
    price: {
        type: Number,
        required: true,
    },
    ratingsAverage: {
        type: Number,
    },
    discount: {
        type: Number,
        validate: {
            validator: function () {
                return this.discount < this.price;
            },
            message: "Discount must be less than actual price",
        },
    },
    reviews: {
        //   array of object id 
        type: [mongoose.Schema.ObjectId],
        ref: "reviewModel"
    },
    averageRating: Number,
    planImages: {
        type: [String]
    }
})
// order matters 
// middleware 
const planModel = mongoose.model("planModel", planSchema);
module.exports = planModel;
