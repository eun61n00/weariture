const express = require('express');

const router = express.Router();

const rootdir = process.env.path;

router.get('/', function(req, res) {
	if (!req.session.loggedin) {
		req.session.loggedin = false
		req.session.idx = -1
	}
	res.render('main');
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