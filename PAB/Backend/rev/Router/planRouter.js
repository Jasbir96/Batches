// requirements
const express = require('express');
let planRouter = express.Router();
let planModel = require("../model/planModel")
const { protectRoute, bodyChecker,isAuthorized } = require("./utilFns");
const { createElement,
    getElement, getElements,
    updateElement,
    deleteElement } = require("../helpers/factory");
// routes-> id
const createPlan = createElement(planModel);
const deletePlan = deleteElement(planModel);
const updatePlan = updateElement(planModel);
const getPlan = getElement(planModel);
const getPlans = getElements(planModel);
planRouter.use(protectRoute);
planRouter
    .route('/')
    .post(bodyChecker, isAuthorized(["admin"]), createPlan)
    // localhost/plan -> get
    .get(protectRoute, isAuthorized(["admin", "ce"]), getPlans);
// console.log(2)
planRouter.route("/:id")
    .get(getPlan)
    .patch(bodyChecker, isAuthorized(["admin", "ce"]), updatePlan)
    .delete(bodyChecker, isAuthorized(["admin"]), deletePlan)

// createPlan
module.exports=planRouter;