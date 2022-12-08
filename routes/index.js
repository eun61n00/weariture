const express = require('express');
const path = require('path');
const rootdir = process.env.path;

const router = express.Router();


router.get('/', function(req, res) {
	if (req.session.loggedin == true) {
		console.log('로그인 세션 유지 성공');
		console.log(req.session.username);
		res.render('main_loggedin', {username: req.session.username});
	} else {
		res.render('main');
	}
});

router.get('/about', (req, res) => {
	res.render('about');
});

router.get('/product', (req, res) => {
	res.render('product');
});

router.get('/detail', (req, res) => {
	res.render('detail');
});

router.get('/contact', (req, res) => {
	res.render('contact');
})

module.exports = router;