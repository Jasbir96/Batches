const ReviewModel = require("../model/reviewModel");
const PlanModel = require("../model/PlanModel");
const { protectRoute } = require("./utilFns")
const {
    getElement, getElements,
    updateElement,
} = require("../helpers/factory");
const updateReview = updateElement(ReviewModel);
const getReview = getElement(ReviewModel);
const getReviews = getElements(ReviewModel);
// createReview
// review-> put entry
//  plan: average rating update 
// plan -> reviewId
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


