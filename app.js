const express = require("express");
const server = express();

server.use(express.static(__dirname + "/public"));

server.get("/", (req, res) => {
	res.sendFile(__dirname + "/main.html");
});

server.get("/about", (req, res) => {
	res.sendFile(__dirname + "/about.html");
});

server.get("/product", (req, res) => {
	res.sendFile(__dirname + "/product.html");
});

server.get("/product_review", (req, res) => {
	res.sendFile(__dirname + "/product_review.html");
});

server.get("/detail", (req, res) => {
	res.sendFile(__dirname + "/detail.html");
});

server.use((req, res) => {
	res.sendFile(__dirname + "/404.html");
});

server.listen(3000, (err) => {
	if (err) return console.log(err);
	console.log("The server is listening on port 3000");
});