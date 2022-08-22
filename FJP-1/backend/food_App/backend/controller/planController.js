const FoodplanModel = require("../model/planModel");
async function getAllplansController(req, res) {
    try {
        // mera obj jo hai wo empty ??
        let plans = await FoodplanModel.find().populate("reviews");
        res.status(200).json({
            Allplans: plans
        })
    } catch (err) {
        console.log(err);
        res.status(500).json({ err: err.message });
    }
}
async function createPlanController(req, res) {
    try {
        console.log(req.body);
        let planObjData = req.body;
        // mera obj jo hai wo empty ??
        const isDataPresent = Object.keys(planObjData).length > 0;
        if (isDataPresent) {
            let newPlan = await FoodplanModel.create(planObjData);
            console.log("10 planController", newPlan);
            res.status(201).json({
                result: "plan created",
                plan: newPlan
            });
        } else {
            res.status(404).json({
                message: "data is incomplete"
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ err: err.message });
    }
}
// id pass
async function getPlanController(req, res) {
    try {
        let id = req.params.planRoutes;
        let plan = await FoodplanModel.findById(id)
        .populate("reviews");;
        res.status(200).json({
            result: "plan found",
            plan: plan

        });

    } catch (err) {
        console.log(err);
        res.json(500).json({
            err: err.message
        })
    }
}
async function updatePlanController(req, res) {
    try {
        console.log("to update", req.body);
        let planUpdateObjData = req.body;
        let id = req.params.planRoutes;
        console.log(id);
        // mera obj jo hai wo empty ??
        const isDataPresent = Object.keys(planUpdateObjData).length > 0;
        if (isDataPresent) {
            // get plan from db 
            const plan = await FoodplanModel.findById(id);

            // update the plan
            for (let key in planUpdateObjData) {
                plan[key] = planUpdateObjData[key];
            }
            // save to db  -> validators will run 
            await plan.save();
            res.status(200).json({
                plan
            })
        } else {
            res.status(404).json({
                message: "nothing to update"
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ err: err.message });
    }

}
async function deletePlanController(req, res) {
    try {
        let id = req.params.planRoutes;
        let plan = await FoodplanModel.findByIdAndDelete(id);
        res.status(200).json({
            result: "plan found",
            plan: plan

        });
    } catch (err) {
        console.log(err);
        res.json(500).json({
            err: err.message
        })
    }
}
module.exports = {
    getAllplansController,
    createPlanController,
    updatePlanController,
    deletePlanController,
    getPlanController
}

