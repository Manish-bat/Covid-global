var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
	res.send("Hello Manish")
});

router.get("/about", function(req, res) {
	res.send("About this covid")
});

module.exports = router;