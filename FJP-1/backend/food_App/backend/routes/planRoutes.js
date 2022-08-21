const express = require('express');
const planRouter = express.Router();
const { getAllplansController,
    createPlanController,
    updatePlanController,
    deletePlanController,
    getPlanController
} =
    require('../controller/planController');
// plans -> get all the plans from db -> sensitive route -> protected route -> logged in i will only allow that person 
planRouter.route("/")
    .get(getAllplansController)
    .post(createPlanController)

planRouter.route("/:planRoutes")
    .get(getPlanController)
    .patch(updatePlanController)
    .delete(deletePlanController)

// loggedin plan
module.exports = planRouter;
