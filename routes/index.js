const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const mysql = require('mysql');
const session = require('express-session');
const { appendFile } = require('fs');
const { request } = require('http');
const { response } = require('express');

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

let rootdir = process.env.PWD + "/src/html/";
router.use(express.static(rootdir + "/public"));
router.use(bodyParser.urlencoded({extended : true}));
router.use(bodyParser.json());

function restrict(req, res, next) {
	if (req.session.loggedin) {
		next();
	} else {
		req.session.error = 'Access denied!';
		res.sendFile(path.join(rootdir + '/login.html'));
	}
}

router.use('/', function(request, response, next) {
	if ( request.session.loggedin == true || request.url == "/login" || request.url == "/register" ) {
		next();
	}
	else {
		response.sendFile(path.join(rootdir + '/main.html'));
	}
});

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

router.get('/register', (req, res) => {
	res.sendFile(rootdir + "/register.html");
});

router.post('/register', function(req, res) {
	var id = req.body.id;
	var password = req.body.password;
	var passwordCheck = req.body.passwordCheck;
	var name = req.body.name;
	var birthYear = req.body.birthYear;
	var birthMonth = req.body.birthMonth;
	var birthDate = req.body.birthDate;
	var gender = req.body.gender;
	var email = req.body.email;
	console.log(id, password, email);
	if (id && password && email) {
		connection.query('SELECT * FROM user WHERE username = ? AND password = ? AND email = ?', [id, password, email], function(error, results, fields) {
			if (error) throw error;
			if (results.length <= 0) {
				connection.query('INSERT INTO user (username, password, email) VALUES(?,?,?)', [id, password, email],
					function (error, data) {
						if (error)
							console.log(error);
						else
							console.log(data);
				});
				res.send(id + ' Registered Successfully!<br><a href="/">Home</a>');
				// res.redirect('/');s
			} else {
				res.send(id + ' Already exists!<br><a href="/home">Home</a>');
			}
			res.end();
		});
	} else {
		res.send('Please enter User Information!');
		res.end();
	}
});

router.get('/login', function(request, response) {
	response.sendFile(path.join(__dirname + '/login.html'));
});

router.post('/login', function(request, response) {
	var username = request.body.id;
	var password = request.body.password;
	console.log(username, password);
	if (username && password) {
		connection.query('SELECT * FROM user WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			if (error) throw error;
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.username = username;
				response.redirect('/');
				response.end();
			} else {
				//response.send('Incorrect Username and/or Password!');
				response.sendFile(path.join(__dirname + '/loginerror.html'));
			}
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

module.exports = router;