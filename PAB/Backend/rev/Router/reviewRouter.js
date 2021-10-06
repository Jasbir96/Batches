// requirments
const express = require('express');
let reviewRouter = express.Router();
let reviewModel = require("../model/reviewModel")
const { protectRoute, bodyChecker, isAuthorized } = require("./utilFns");
const { createElement,
    getElement, getElements,
    updateElement,
    deleteElement } = require("../helpers/factory");
const createReview = createElement(reviewModel);
const deleteReview = deleteElement(reviewModel);
const updateReview = updateElement(reviewModel);
const getReview = getElement(reviewModel);
const getReviews = getElements(reviewModel);
// routes-> id
reviewRouter.use(protectRoute);
reviewRouter.get("/getuseralso", getUsersAlso);
reviewRouter
    .route('/')
    .post(bodyChecker, isAuthorized(["admin"]), createReview)
    // localhost/review -> get
    .get(protectRoute, isAuthorized(["admin", "ce"]), getReviews);
// console.log(2)
reviewRouter.route("/:id")
    .get(getReview)
    .patch(bodyChecker, isAuthorized(["admin", "ce"]), updateReview)
    .delete(bodyChecker, isAuthorized(["admin"]), deleteReview)
async function getUsersAlso(req, res) {
    try {
        let reviews = await reviewModel.find().populate({
            path: "user plan",
            select: "name email duration"
        })
        res.json({
            reviews
        })
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "server error"
        })
    }
}
// createReview
module.exports = reviewRouter;