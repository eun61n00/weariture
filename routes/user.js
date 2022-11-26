const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const mysql = require('mysql');
const session = require('express-session');
const router = express.Router();

const connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'web2022',
	password : 'P@ssw0rd!',
	database : 'WEARITURE'
});

// let rootdir = process.env.PWD + "/src/html/";
let rootdir = process.env.PWD;
// router.use(express.static(rootdir + "/public"));
router.use(bodyParser.urlencoded({extended : true}));
router.use(bodyParser.json());

router.get('/', (req, res) => {
	console.log(__dirname);
	console.log(rootdir);
	res.send("Hello, User");
});

router.get('/register', (req, res) => {
	res.sendFile("/html/register.html");
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

module.exports = router;