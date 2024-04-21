const express = require("express");
const router = express.Router();
const TestController = require("../controllers/TestController");

router.route("/user").get(TestController.index);

module.exports = router;