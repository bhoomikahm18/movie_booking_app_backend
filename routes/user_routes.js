const express = require('express');
const { getAllUsers, singup, updateUser, deleteUser, login, getBookingsOfUser } = require('../controllers/user_controller.js')

const userRouter = express.Router();

userRouter.get("/", getAllUsers);
userRouter.post("/signup", singup);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);
userRouter.post("/login", login);
userRouter.get("/bookings/:id", getBookingsOfUser);

module.exports = userRouter;