const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user");

//routes

router.get("/user-test", UserController.userTest);

//export routes

module.exports = router;