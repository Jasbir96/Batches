const PlanModel = require("../models/PlanModel");
// const planModel = require("../models/PlanModel");
const express = require('express');
const PlanRouter = express.Router();
const protectRoute = require("./authHelper");
PlanRouter
    .route("/:id")
    .get(getPlanById)
    .patch(updatePlan)
    .delete(deletePlan)
// ****************************************************
PlanRouter
    .route("/")
    .get( getPlans)
    .post(createPlan)
// Homework 
// findBYIdAndUpdate ->
async function createPlan(req, res) {
    try {
        let plan = req.body;
        if (plan) {
             plan = await PlanModel.create(plan);
            res.status(200).json({
                plan: plan
            });
        } else {
            res.status(200).json({
                message: "kindly enter data"
            });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Server error"
        });
    }
}

async function getPlans(req, res) {
    try {
// filter
// sort
// remove
// paginate

        let Plans = await PlanModel.find();
        res.status(200).json({
            "message": "list of all the Plans",
            Plans: Plans
        })
    } catch (err) {
        res.status(500).json({
            error: err.message,
            "message": "can't get Plans"
        })
    }

    // for sending key value pair
}
async function updatePlan(req, res) {
    try {
        await PlanModel.updateOne({ name }, req.body);
        let plan = await PlanModel.findOne({ name });
        res.status(200).json(plan);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Server error"
        });

    }
    // email send to
    // nodemailer -> table tag through
    //  service -> gmail
}
// findByIdnDelete

async function deletePlan(req, res) {
    Plan = {}
    res.status(200).json(Plan);
}
// id
async function getPlanById(req, res) {
    try {
        let id = req.params.id;
        let plan = await PlanModel.getElementById(id);

        res.status(200).json({
            plan: plan
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Server error"
        });
    }

}
// Logic ??

module.exports = PlanRouter;
