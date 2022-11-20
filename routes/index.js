const express = require("express");

const router = express.Router();

// router.get("/", (req, res) => {
// 	res.send("hello express");
// });

let rootdir = process.env.PWD;

router.use(express.static(rootdir + "/public"));

router.get("/", (req, res) => {
	res.sendFile(rootdir + "/main.html");
});

router.get("/about", (req, res) => {
	res.sendFile(rootdir + "/about.html");
});

router.get("/product", (req, res) => {
	res.sendFile(rootdir + "/product.html");
});

router.get("/product_review", (req, res) => {
	res.sendFile(rootdir + "/product_review.html");
});

router.get("/detail", (req, res) => {
	res.sendFile(rootdir + "/detail.html");
});

router.use((req, res) => {
	res.sendFile(rootdir + "/404.html");
});

module.exports = router;