const PlanModel = require("../models/PlanModel");
// const planModel = require("../models/PlanModel");
const express = require('express');
const PlanRouter = express.Router();
const factory = require("../helpers/factory");
const protectRoute = require("./authHelper");
const createPlan = factory.createElement(PlanModel);
const getPlans = factory.getElements(PlanModel);
const deletePlan = factory.deleteElement(PlanModel);
const updatePlan = factory.updateElement(PlanModel);
const getPlanById = factory.getElementById(PlanModel);
PlanRouter.use(protectRoute);
PlanRouter.route("/top3plans")
    .get(getTop3Plans)
PlanRouter
    .route("/:id")
    .get(getPlanById)
    .patch(updatePlan)
    .delete(deletePlan)
// ****************************************************
PlanRouter
    .route("/")
    .get(getPlans)
    .post(createPlan)

    .limit(3)    
async function getTop3Plans(req, res) {
    try {
        console.log("hello")
        let plans = await PlanModel.find()
        .sort("-averageRating")
        .populate({
                path: 'reviews',
                select:"review"
            })

        // let plansArr = []
        // for (let i = 0; i < plans.length; i++) {
        //     let plan = await PlanModel.findById(plans[i]["_id"]).populate("reviews");
        //     plansArr.push(plan)
        // }
        console.log(plans);
        res.status(200).json({
            plans
        })
    } catch (err) {
        console.log(err);
        res.status(200).json({
            message: err.message
        })
    }
}
// Homework 
// findBYIdAndUpdate ->
// async function createPlan(req, res) {
//     try {
//         let plan = req.body;
//         if (plan) {
//             plan = await PlanModel.create(plan);
//             res.status(200).json({
//                 plan: plan
//             });
//         } else {
//             res.status(200).json({
//                 message: "kindly enter plan's data"
//             });
//         }
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({
//             message: "Server error"
//         });
//     }
// }
// query params sql injection
// localhost:8080/api/plan?select=name%price&page=1&sort=price&myquery={"price":{"$gt":200}}
// async function getPlans(req, res) {
//     try {
//         // console.log(req.query);
//         // sort,
//         // sort
//         // sort
//         // paginate
//         let ans = JSON.parse(req.query.myquery);
//         console.log("ans", ans);
//         let plansQuery = PlanModel.find(ans);
//         let sortField = req.query.sort;
//         let sortQuery = plansQuery.sort(`-${sortField}`);
//         let params = req.query.select.split("%").join(" ");
//         let fileteredQuery = sortQuery
//             .select(`${params} -_id`);
//         // pagination
//         // skip
//         // limit
//         let page = Number(req.query.page) || 1;
//         let limit = Number(req.query.limit) || 3;
//         let toSkip = (page - 1) * limit;
//         let paginatedResultPromise = fileteredQuery
//             .skip(toSkip)
//             .limit(limit);
//         let result = await paginatedResultPromise;
//         // PlanModel.sort().select()
//         // 
//         res.status(200).json({
//             "message": "list of all the Plans",
//             Plans: result
//         })
//     } catch (err) {
//         res.status(500).json({
//             error: err.message,
//             "message": "can't get Plans"
//         })
//     }

//     // for sending key value pair
// }

// findByIdnDelete
// async function deletePlan(req, res) {
//     Plan = {}
//     res.status(200).json(Plan);
// }
// id
// async function updatePlan(req, res) {
//     try {
//         await PlanModel.updateOne({ name }, req.body);
//         let plan = await PlanModel.findOne({ name });
//         res.status(200).json(plan);
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({
//             message: "Server error"
//         });

//     }
//     // email send to
//     // nodemailer -> table tag through
//     //  service -> gmail
// }
// async function getPlanById(req, res) {
//     try {
//         let id = req.params.id;
//         let plan = await PlanModel.getElementById(id);

//         res.status(200).json({
//             plan: plan
//         });
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({
//             message: "Server error"
//         });
//     }

// }
// Logic ??

module.exports = PlanRouter;
