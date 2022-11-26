const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const session = require('express-session');
const nunjucks = require('nunjucks');
const dotenv = require('dotenv');

dotenv.config();
const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');
const cookieParser = require("cookie-parser");

const app = express();
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'html');
nunjucks.configure('views', {
	express: app,
	watch: true,
})

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
	secret: process.env.COOKIE_SECRET,
	resave: true,
	saveUninitialized: false,
	cookie: {
		httpOnly: true,
		secure: false,
	}
}));
app.use('/', indexRouter);
app.use('/user', userRouter);

app.use((req, res, next) => {
	const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
	error.status = 404;
	next(error);
});

app.use((err, req, res, next) => {
	res.locals.message = err.message;
	res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
	res.status(err.status || 500);
	res.render('error');
})

app.listen(app.get('port'), (err) => {
	if (err) return console.log(err);
	console.log(`The app is listening on port ${app.get('port')}`);
});