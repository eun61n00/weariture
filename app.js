const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require("cookie-parser");
const dotenv = require('dotenv');
const morgan= require('morgan');
const passport = require('passport');
const createError = require("http-errors");
const logger = require("morgan");
const nunjucks = require("nunjucks");
const { sequelize } = require("./models");

dotenv.config();
const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');
const reviewRouter = require('./routes/review');

const app = express();
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname + '/views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

nunjucks.configure("views", {
	express: app,
	watch: true,
	}
);

sequelize.sync({force: false})
    .then(()=>{
        console.log("데이터베이스 연결 성공");
    })
    .catch((err)=> {
        console.error(err);
    });

app.use(morgan('dev'));
app.use(logger("dev"));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
	session({
		resave: false,
		saveUninitialized: false,
		secret: process.env.COOKIE_SECRET,
		cookie: {
			httpOnly: true,
			secure: false,
	},
	})
);


// passport 미들웨어 등록
app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/review', reviewRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render("error");
});

app.listen(app.get('port'), (err) => {
	console.log(`The app is listening on port ${app.get('port')}`);
});
