const express = require("express");
const { addAdmin, adminLogin, getAdmins } = require("../controllers/admin_controller.js");

const adminRouter = express.Router();

adminRouter.post("/signup", addAdmin);
adminRouter.post("/login", adminLogin);
adminRouter.get("/", getAdmins);

module.exports = adminRouter;