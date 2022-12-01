const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const mysql = require('mysql');
const session = require('express-session');
const router = express.Router();
const passport = require('passport'), localStrategy = require('passport-local').Strategy;

const connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'P@ssw0rd',
	database : 'WEARITURE'
});

let rootdir = process.env.PWD;
router.use(bodyParser.urlencoded({extended : true}));
router.use(bodyParser.json());

passport.use(new localStrategy(
	{
		usernameField: 'username',
		passwordField: 'password'
	},
	function(username, password, done) {
		User.findOne({username: username}, function(err, user) {
			if (err) {return done(err);}
			if (!user) {
				return done(null, false, {message: 'Incorrect username.'});
			}
			if (!user.validPassword(password)) {
				return done(null, false, {message: 'Incorrect password.'});
			}
			return done(null, user);
		});
	}
));

passport.serializeUser(function(user, done) {
	done(none, user.id);
});

passport.deserializeUser(function(id, done) {
	User.findOne(id, function(err, user) {
		done(err, user);
	});
})

router.get('/', (req, res) => {
	console.log(__dirname);
	console.log(rootdir);
	res.send("Hello, User");
});

router.get('/register', (req, res) => {
	res.render('register.html')
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
				// res.redirect('/');
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

// router.post('/login', function(req, res) {
// 	var username = req.body.id;
// 	var password = req.body.password;
// 	console.log(username, password);
// 	if (username && password) {
// 		connection.query('SELECT * FROM user WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
// 			if (error) throw error;
// 			if (results.length > 0) {
// 				req.session.loggedin = true;
// 				req.session.username = username;
// 				res.redirect('/');
// 				res.end();
// 			} else {
// 				//res.send('Incorrect Username and/or Password!');
// 				res.sendFile(path.join(rootdir + '/loginerror.html'));
// 			}
// 		});
// 	} else {
// 		res.send('Please enter Username and Password!');
// 		res.end();
// 	}
// });


// login POST 요청이 들어왔을 때, passport 실행
router.post('/login',
			passport.authenticate('local', {successRedirect: '/',
											failureRedirect: '/user/login'})
);

router.get('/logout', function(req, res){
	req.logout();
	req.session.save((err) => {
		res.redirect('/');
	})
})


module.exports = router;