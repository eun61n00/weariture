const path = require("path");
const express = require("express");
const { Model } = require("sequelize");
const router = express.Router();
const Review = require("../models/review");

router.get("/", async (req, res) => {
	const review = await Review.findAll({});
	res.render("review", { review });
});

router.get("/write", async(req, res) => {
	const review = await Review.findAll({});
	res.render("review_write", { review });
})

router.post("/write", async(req, res) => {
	let review = await Review;
	review.create({
		pro_name: req.body.pro_name,
		tit: req.body.review_content,
		cate: req.body.cate,
		cus_name: req.body.cus_name,
		re_date: 'test',
		view: 0,
		rec: 0,
		rate: req.body.rate
	})
	res.redirect(path.join(__dirname + "review"));
	// .then(function(createReviewRecord) {
	// 	review = Review.findAll({});
	// 	console.log(review);
	// 	res.render('review', { review });
	// });

})

module.exports = router;
