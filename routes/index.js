const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const mysql = require('mysql');
const session = require('express-session');

const connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'web2022',
	password : 'P@ssw0rd',
	database : 'WEARITURE'
});

const router = express.Router();
let rootdir = process.env.PWD;

router.use(express.static(rootdir + "/public"));
router.use(bodyParser.urlencoded({extended : true}));
router.use(bodyParser.json());

router.get("/", (req, res) => {
	res.sendFile(rootdir + "/main.html");
	// res.send("hello index");
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

router.get("/register", (req, res) => {
	res.sendFile(rootdir + "/register.html");
});

router.post('/register', function(request, response) {
	var username = request.body.username;
	var password = request.body.password;
	var password2 = request.body.password2;
	var email = request.body.email;
	console.log(username, password, email);
	if (username && password && email) {
		connection.query('SELECT * FROM user WHERE username = ? AND password = ? AND email = ?', [username, password, email], function(error, results, fields) {
			if (error) throw error;
			if (results.length <= 0) {
		connection.query('INSERT INTO user (username, password, email) VALUES(?,?,?)', [username, password, email],
			function (error, data) {
				if (error)
					console.log(error);
				else
					console.log(data);
		});
			response.send(username + ' Registered Successfully!<br><a href="/home">Home</a>');
			} else {
				response.send(username + ' Already exists!<br><a href="/home">Home</a>');
			}
			response.end();
		});
	} else {
		response.send('Please enter User Information!');
		response.end();
	}
});

function restrict(req, res, next) {
	if (req.session.loggedin) {
		next();
	} else {
		req.session.error = 'Access denied!';
		res.sendFile(path.join(rootdir + '/login.html'));
	}
}

module.exports = router;