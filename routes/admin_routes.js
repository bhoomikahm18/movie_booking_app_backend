const express = require("express");
const { addAdmin, adminLogin } = require("../controllers/admin_controller.js");

const adminRouter = express.Router();

adminRouter.post("/signup", addAdmin);
adminRouter.post("/login", adminLogin);

module.exports = adminRouter;