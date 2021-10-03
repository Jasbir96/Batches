// dependecies
const express = require("express");
const ReviewRouter = express.Router();
const protectRoute = require("./authHelper");

const createReview = factory.createElement(ReviewModel);
const getReviews = factory.getElements(ReviewModel);
const deleteReview = factory.deleteElement(ReviewModel);
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
    .post(createReview)
module.exports = ReviewRouter;

