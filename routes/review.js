const express = require("express");
const Review = require("../models/review");
const router = express.Router();

router.get("/", async (req, res) => {
	const review = await Review.findAll({});
	console.log(review);
	res.render("review", { review });
});

module.exports = router;
