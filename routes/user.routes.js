const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/user.controllers.js");

router.post("/add-user", userCtrl.addUser);
router.get("/get-user", userCtrl.getUser)
module.exports = router;