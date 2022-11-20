const express = require("express");
const path = require("path");
const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');

const app = express();
app.set('port', process.env.PORT || 3000);

app.use('/', indexRouter);
app.use('/user', userRouter);
app.use(express.static(__dirname + "/public"));

app.use((req, res, next) => {
	res.status(404).send('Not Found');
})

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/main.html");
});

app.get("/about", (req, res) => {
	res.sendFile(__dirname + "/about.html");
});

app.get("/product", (req, res) => {
	res.sendFile(__dirname + "/product.html");
});

app.get("/product_review", (req, res) => {
	res.sendFile(__dirname + "/product_review.html");
});

app.get("/detail", (req, res) => {
	res.sendFile(__dirname + "/detail.html");
});

app.use((req, res) => {
	res.sendFile(__dirname + "/404.html");
});

app.listen(app.get('port'), (err) => {
	if (err) return console.log(err);
	console.log(`The app is listening on port ${app.get('port')}`);
});