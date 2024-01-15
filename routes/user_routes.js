const express = require('express');
const { getAllUsers, singup, updateUser } = require('../controllers/user_controller.js')

const userRouter = express.Router();

userRouter.get("/", getAllUsers);
userRouter.post("/signup", singup);
userRouter.post("/:id", updateUser);

module.exports = userRouter;