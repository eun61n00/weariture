const express = require('express');

const router = express.Router();

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
	// res.sendFile(rootdir + "/public/html/main.html");
});

router.get('/about', (req, res) => {
	res.render('about.html');
});

router.get('/product', (req, res) => {
	res.render('product.html');
});

router.get('/product_review', (req, res) => {
	res.render('product_review.html');
});

router.get('/detail', (req, res) => {
	res.render('detail.html');
});

router.get('/contact', (req, res) => {
	res.render('contact.html');
})

module.exports = router;