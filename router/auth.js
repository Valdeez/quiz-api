const express = require("express");
const authController = require("../controllers/authController");
const router = express.Router();

module.exports = function (app) {};

router.post("/signup", authController.signup);

router.post("/signin", authController.signin);

module.exports = router;
