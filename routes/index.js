const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
const mysql = require('mysql');
const session = require('express-session');
const { appendFile } = require('fs');
const { req } = require('http');
const { res } = require('express');

const connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'web2022',
	password : 'P@ssw0rd',
	database : 'WEARITURE'
});

const router = express.Router();
router.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true,
}));

let rootdir = process.env.PWD;
router.use('/static', express.static(rootdir + '/public'));
router.use(bodyParser.urlencoded({extended : true}));
router.use(bodyParser.json());
router.use(cookieParser());

function restrict(req, res, next) {
	if (req.session.loggedin) {
		next();
	} else {
		req.session.error = 'Access denied!';
		res.sendFile(path.join(rootdir + '/login.html'));
	}
}

// router.use('/', function(request, response, next) {
// 	if ( request.session.loggedin == true || request.url == "/login" || request.url == "/register" ) {
// 		next();
// 	}
// 	else {
// 		response.sendFile(path.join(rootdir + '/main.html'));
// 	}
// });

router.get("/", (req, res) => {
	if (req.session.loggedin) {
		// res.sendFile(rootdir + "/main.html");
		res.render(rootdir + "/main.html", {loggedin: true});
	} else {
		res.render(rootdir + "/main.html", {loggedin: false});
	}
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

module.exports = router;