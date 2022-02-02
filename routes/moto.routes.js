const express = require("express");
const motoCtrl = require("../controllers/moto.controllers.js");
const router = express.Router();

router.post("/add-moto", motoCtrl.addMoto);
router.post("/get-moto-from-user", motoCtrl.getMotoFromUser);


module.exports = router;