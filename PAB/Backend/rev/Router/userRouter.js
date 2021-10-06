// dependency
const express = require("express");
const userModel =
    require("../model/userModel")
// router
const userRouter = express.Router();
const { protectRoute, bodyChecker, isAuthorized } = require("./utilFns");
const { createElement,
    getElement, getElements,
    updateElement,
    deleteElement } = require("../helpers/factory");
// routes-> id
const createUser = createElement(userModel);
const deleteUser = deleteElement(userModel)
const updateUser = updateElement(userModel)
const getUser = getElement(userModel)
const getUsers = getElements(userModel)
userRouter.use(protectRoute);
console.log(1)
userRouter
    .route('/')
    .post(bodyChecker, isAuthorized(["admin"]), createUser)
    // localhost/user -> get
    .get(protectRoute, isAuthorized(["admin", "ce"]), getUsers);
// console.log(2)
userRouter.route("/:id")
    .get(getUser)
    .patch(bodyChecker, isAuthorized(["admin", "ce"]),updateUser)
    .delete(bodyChecker, isAuthorized(["admin"]), deleteUser)
console.log(3)
// functions


// moderator ,user
// async function getUser(req, res) {
//     let { id } = req.params
//     try {
//         let users = await userModel.findById(id);
//         res.status(200).json({
//             "message": users
//         })
//     } catch (err) {
//         res.status(502).json({
//             message: err.message
//         })
//     }
// }
// async function getUsers(req, res) {
//     try {
//         let users = await userModel.find();
//         res.status(200).json({
//             "message": users
//         })
//     } catch (err) {
//         res.status(502).json({
//             message: err.message
//         })
//     }
// }
// async function updateUser(req, res) {
//     let { id } = req.params;
//     try {
//         if (req.body.password || req.body.confirmPassword) {
//             return res.json({
//                 message: "use forget password instead"
//             })
//         }
//         let user = await userModel.findById(id);
//         console.log("60", user)
//         if (user) {
//             for (let key in req.body) {
//                 user[key] = req.body[key];
//             }
//             // save -> confirm ,password
//             await user.save({
//                 validateBeforeSave: false
//             });
//             res.status(200).json({
//                 user: user
//             });
//         } else {
//             res.status(404).json({
//                 message: "user not found"
//             })
//         }
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({
//             message: "Server error"
//         });
//     }
// }

// // only authorized to admin

// async function createUser(req, res) {
//     try {
//         let user = await userModel.create(req.body);
//         res.status(200).json({
//             user: user
//         });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({
//             message: "Server error"
//         });
//     }
// }
// async function deleteUser(req, res) {
//     let { id } = req.params;
//     try {
//         let user = await userModel.findByIdAndDelete(id);
//         res.status(200).json({
//             user: user
//         });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({
//             message: "Server error"
//         });
//     }
// }


module.exports = userRouter;

