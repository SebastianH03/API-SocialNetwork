const express = require("express");
const router = express.Router();
const PublicationController = require("../controllers/publications");

//routes

router.get("/publication-test",PublicationController.publicationTest);

//export routes

module.exports = router;