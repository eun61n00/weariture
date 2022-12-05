const express = require('express');

const router = express.Router();

// const mysql = require('mysql2');

// const connection = mysql.createConnection({
// 	host     : 'localhost',
// 	user     : 'web2022',
// 	password : 'P@ssw0rd',
// 	database : 'WEARITURE'
// });
// connection.on('error', function() {});
// console.log(connection);

// router.use((req, res, next) => {
// 	res.locals.user = null;
// 	res.locals.userPoint = 0;
// })
// router.use(bodyParser.urlencoded({extended : true}));
// router.use(bodyParser.json());
// router.use(cookieParser());

// function restrict(req, res, next) {
// 	if (req.session.loggedin) {
// 		next();
// 	} else {
// 		req.session.error = 'Access denied!';
// 		res.sendFile(path.join(rootdir + '/login.html'));
// 	}
// }

// router.use('/', function(request, response, next) {
// 	if ( request.session.loggedin == true || request.url == "/login" || request.url == "/register" ) {
// 		next();
// 	}
// 	else {
// 		response.sendFile(path.join(rootdir + '/main.html'));
// 	}
// });

const rootdir = process.env.path;

// router.get("/", (req, res) => {
// 	if (req.session.loggedin) {
// 		// res.sendFile(rootdir + "/main.html");
// 		res.render(rootdir + "/main.html", {loggedin: true});
// 	} else {
// 		res.render(rootdir + "/main.html", {loggedin: false});
// 	}
// });

router.get('/', (req, res, next) => {
	res.render('main', {title: 'main'});
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