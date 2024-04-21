const express = require("express");
const router = express.Router();
const FollowController = require("../controllers/follows");

//routes

router.get("/user-test", FollowController.followTest);

//export routes

module.exports = router;