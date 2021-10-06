const mongoose = require("mongoose");
// let { DB_LINK } = require("../secrets");
let { PASSWORD } = require("../secrets");
const validator = require("email-validator");
let dbLink
    = `mongodb+srv://admin:${PASSWORD}@cluster0.3gwfq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
mongoose
    .connect(dbLink)
    .then(function (connection) {
        console.log("db has been conncetd")
    }).catch(function (error) {
        console.log("err", error);
    })
const reviewSchema = new mongoose.Schema({
    review: {
        type: String,
        required: [true, "Review can't be empty"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: [true, "Review must contain some rating"]
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    user: {
        type: mongoose.Schema.ObjectId,
        required: [true, "Review must belong to a user"],
        ref: "PABUserModel"
    },
    plan: {
        type: mongoose.Schema.ObjectId,
        ref: "PABPlanModel",
        required: [true, "Review must belong to a plan "]
    }
});
const ReviewModel = mongoose.model("PABreviewModel", reviewSchema);
module.exports = ReviewModel;