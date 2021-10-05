// dependecies
const express = require("express");
const ReviewRouter = express.Router();
const protectRoute = require("./authHelper");
const ReviewModel = require("../models/reviewModel");
const PlanModel = require("../models/PlanModel");
const factory = require("../helpers/factory");
const createReview = async function (req, res) {
    try {
        let review = await ReviewModel.create(req.body);
        console.log("review", review);
        let planId = review.plan;
        let plan = await PlanModel.findById(planId);
        plan.reviews.push(review["_id"]);
        
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
};
const getReviews = factory.getElements(ReviewModel);
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
            message: "review created",
            review: review
        })
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
};
const updateReview = factory.updateElement(ReviewModel);
const getReviewById = factory.getElementById(ReviewModel);

ReviewRouter.use(protectRoute);
ReviewRouter
    .route("/:id")
    .get(getReviewById)
    .patch(updateReview)
    .delete(deleteReview)
// ****************************************************
ReviewRouter
    .route("/")
    .get(getReviews)
    .post(createReview);
// cron job -> 5 second -> average rating 

module.exports = ReviewRouter;

