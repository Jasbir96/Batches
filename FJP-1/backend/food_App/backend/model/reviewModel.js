const mongoose = require("mongoose");
const reviewSchema = new mongoose.Schema({
    description: {
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
        // info
        type: mongoose.Schema.ObjectId, // _id
        required: [true, "Review must belong to a user"],
        ref:"FooduserModel"     
    },
    plan: {
        // info
        type: mongoose.Schema.ObjectId, //_id
        required: [true, "Review must belong to a plan "],
        ref:"FoodplanModel"
    }
})
const ReviewModel = mongoose.model("FoodreviewModel",
 reviewSchema);
module.exports = ReviewModel;