const express = require("express");
const router = express.Router();

router.post("/add-moto", (req, res, next) => {
    res.send("Welcome to moto route");
});
router.get("/get-moto", (req, res, next) => {
    res.send("welcome to get moto");
});


module.exports = router;