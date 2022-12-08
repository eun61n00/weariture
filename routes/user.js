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

router.post('/register', async(req, res) => {

	const user = await User;
	const username = req.body.id;
	const password = req.body.password;
	const email = req.body.email;

	if (username && password && email) {
		// TODO DB insert + redirection

		user.create({
			username: username,
			password: password,
			email: email
		})
		req.session.username = username;
		req.session.loggedin = true;
		res.write("<script>alert('success')</script>");
		res.write("<script>window.location=\"../user/login\"</script>");
		// res.redirect('/login');
		// res.send("회원가입 성공");
	} else {
		// res.send("정보를 모두 입력하세요");
	}
});

router.get('/login', (req, res) => {
	console.log('로그인 페이지 진입');
	res.render('login');
});

router.post('/login', async (req, res) => {
	const username = req.body.userId;
	const userPassword = req.body.password;

	const user = await User.findOne({
		where: {username: username, password: userPassword}
	});

	if (user) {
		req.session.username = username;
		req.session.loggedin = true;
		// res.send('Login Success');
	} else {
		// res.send('Login Fail');
	}
	res.redirect('/');
});

router.get('/logout', function(req, res){
	req.session.username = undefined;
	req.session.loggedin = false;
	res.redirect('/');
})

module.exports = router;