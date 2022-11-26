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

let rootdir = process.env.PWD + "/src/html/";
<<<<<<< HEAD
// let rootdir = process.env.PWD;
router.use('/static', express.static(__dirname + '/public'));
=======
// router.use(express.static(rootdir + "/public"));
>>>>>>> 33be01611c9d651293de1e35d00ea5440945dcca
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

<<<<<<< HEAD
router.use('/', function(req, res, next) {
	if ( req.session.loggedin == true || req.url == "/login" || req.url == "/register" ) {
		next();
	}
	else {
		res.sendFile(path.join(rootdir + '/main.html'));
	}
});

router.get("/", (req, res) => {
	if (req.session.loggedin) {
		// res.sendFile(rootdir + "/main.html");
		res.render(rootdir + "/main.html", {loggedin: true});
	} else {
		res.render(rootdir + "/main.html", {loggedin: false});
	}
=======
// router.use('/', function(request, response, next) {
// 	if ( request.session.loggedin == true || request.url == "/login" || request.url == "/register" ) {
// 		next();
// 	}
// 	else {
// 		response.sendFile(path.join(rootdir + '/main.html'));
// 	}
// });

router.get("/", (req, res) => {
	res.sendFile(rootdir + "/main.html");
>>>>>>> 33be01611c9d651293de1e35d00ea5440945dcca
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

<<<<<<< HEAD
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

router.get('/login', function(req, res) {
	res.sendFile(path.join(__dirname + '/login.html'));
});

router.post('/login', function(req, res) {
	var username = req.body.id;
	var password = req.body.password;
	console.log(username, password);
	if (username && password) {
		connection.query('SELECT * FROM user WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			if (error) throw error;
			if (results.length > 0) {
				req.session.loggedin = true;
				req.session.username = username;
				res.redirect('/');
				res.end();
			} else {
				//res.send('Incorrect Username and/or Password!');
				res.sendFile(path.join(rootdir + '/loginerror.html'));
			}
		});
	} else {
		res.send('Please enter Username and Password!');
		res.end();
	}
});

=======
>>>>>>> 33be01611c9d651293de1e35d00ea5440945dcca
module.exports = router;