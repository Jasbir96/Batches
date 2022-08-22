const reviewModel = require("../model/reviewModel");
const planModel = require("../model/planModel");
async function createReviewController(req, res) {
    try {
        let reviewData = req.body;
        let review = await reviewModel.create(reviewData);
        let rating = review.rating;
        let reviewId = review["_id"];
        let currentPlan = await planModel.findById(review.plan);
        // average rating 
        let totalNoofRating = currentPlan.reviews.length;
        let prevAvg = currentPlan.averageRating;
        if (prevAvg) {
            let totalRatings = prevAvg * totalNoofRating;
            let newAvg = (totalRatings + rating) / 
            (totalNoofRating + 1);
            currentPlan.averageRating = newAvg;
        } else {
            currentPlan.averageRating = rating;
        }
        currentPlan.reviews.push(reviewId);
        await currentPlan.save();
        res.status(201).json({
            review,
            result: "created"
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err.message });
    }
}
async function getAllReviewController(req, res) {
    try {
        let reviews = await reviewModel.find()
            // multiple different entries from diff models 
            .populate({ path: "user", select: "name pic " })
            .populate({ path: "plan", select: "price name" })
        res.status(200).json({
            reviews,
            result: "all results send "
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: err.message });
    }
}
module.exports = {
    createReviewController,
    getAllReviewController
}