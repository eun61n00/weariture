const express = require('express');
const path = require('path');
const rootdir = process.env.path;

const router = express.Router();


router.get('/', function(req, res) {
	if (!req.session.loggedin) {
		req.session.loggedin = false
		req.session.idx = -1
	}
	res.render('main');
	// res.render(path.join(__dirname + 'main'));
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