const express = require('express');
const { getAllUsers } = require('../controllers/user_controller.js')

const userRouter = express.Router();

userRouter.get("/", getAllUsers);

module.exports = userRouter;