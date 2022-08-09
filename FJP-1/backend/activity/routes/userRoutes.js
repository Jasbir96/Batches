const express = require('express');
const userRouter = express.Router();
const { getAllUsersController, profileController } =
    require('../controller/userController');
const { protectRoute } = require("../controller/authController");
// users -> get all the users from db -> sensitive route -> protected route -> logged in i will only allow that person 
userRouter.get("/users", protectRoute, getAllUsersController);
// loggedin user
userRouter.get("/user", protectRoute, profileController);
module.exports=userRouter