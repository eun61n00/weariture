const express = require("express");
const path = require("path");
const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();
app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

app.use('/', indexRouter);
app.use('/user', userRouter);

app.listen(app.get('port'), (err) => {
	if (err) return console.log(err);
	console.log(`The app is listening on port ${app.get('port')}`);
});

app.use((req, res, next) => {
	res.status(404).send('Not Found');
})