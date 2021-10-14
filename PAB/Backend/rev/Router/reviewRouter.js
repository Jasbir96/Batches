// dependency
const express = require("express");

// router
const ReviewRouter = express.Router();
const ReviewModel = require("../model/reviewModel");
const PlanModel = require("../model/planModel");
const { protectRoute } = require("./utilFns")
const {
    getElement, getElements,
    updateElement,
} = require("../helpers/factory");
const updateReview = updateElement(ReviewModel);
const getReview = getElement(ReviewModel);
const getReviews = getElements(ReviewModel);
// createReview
const createReview = async function (req, res) {
    try {
        // review-> put entry
        let review = await ReviewModel.create(req.body);
        // plan -> reviewId
        let planId = review.plan;
        let plan = await PlanModel.findById(planId);
        plan.reviews.push(review["_id"]);
        //  plan: average rating update 
        if (plan.averageRating) {
            let sum = plan.averageRating * plan.reviews.length;
            let finalAvgRating =
                (sum + review.rating) / (plan.review.length + 1);
            plan.averageRating = finalAvgRating
        } else {
            plan.averageRating = review.rating;
        }
        await plan.save();
        res.status(200).json({
            message: "review created",
            review: review
        })
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}
const deleteReview = async function (req, res) {
    try {
        let review = await ReviewModel.findByIdAndDelete(req.body.id);
        console.log("review", review);
        let planId = review.plan;
        let plan = await PlanModel.findById(planId);
        let idxOfReview = plan.reviews.indexOf(review["_id"]);
        plan.review.splice(idxOfReview, 1);
        await plan.save();
        res.status(200).json({
            message: "review deleted",
            review: review
        })
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
};
// deleteReview
ReviewRouter
    .route("/:id")
    .get(getReview)
    .patch(protectRoute, updateReview)
    .delete(protectRoute, deleteReview)
// ****************************************************
ReviewRouter
    .route("/")
    .get(getReviews)
    .post(protectRoute, createReview);

module.exports = ReviewRouter;


