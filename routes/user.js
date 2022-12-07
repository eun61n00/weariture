const express = require("express");
const { Model } = require("sequelize");
const User = require("../models/user");

const router = express.Router();


router.get('/', async (req, res) => {
	const user = await User.findAll({});
	console.log(user);
	res.send("Hello, User");
});

router.get('/register', (req, res) => {
	res.render('register')
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

router.get('/login', (req, res) => {
	res.render('login');
});

router.post('/login', async (req, res) => {
	const userName = req.body.userId;
	const userPassword = req.body.password;

	const user = await User.findOne({
		where: {username: userName, password: userPassword}
	});

	if (user) {
		res.send('Login Success');
	} else {
		res.send('Login Fail');
	}
});

router.get('/logout', function(req, res){
	req.logout();
	req.session.save((err) => {
		res.redirect('/');
	})
})


module.exports = router;