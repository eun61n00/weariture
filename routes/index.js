const express = require("express");
const path = require("path");
const rootdir = process.env.path;

const router = express.Router();

const Product = require("../models/product");

router.get("/", function (req, res) {
    res.render("main", { loggedin: req.session.loggedin, username: req.session.username });
});

router.get("/about", (req, res) => {
    res.render("about", { loggedin: req.session.loggedin, username: req.session.username });
});

router.get("/product", async (req, res) => {
    const product = await Product.findAll({});
    res.render("product", { product, loggedin: req.session.loggedin, username: req.session.username });
});

router.get("/product/:color", async (req, res) => {
    const color = req.params.color;
    console.log(color);
    const product = await Product.findAll({ where: { color: color } });
    res.render("product", { product, loggedin: req.session.loggedin, username: req.session.username });
});

router.get("/detail", (req, res) => {
    res.render("detail", { loggedin: req.session.loggedin, username: req.session.username });
});

router.get("/contact", (req, res) => {
    res.render("contact", { loggedin: req.session.loggedin, username: req.session.username });
});

module.exports = router;
