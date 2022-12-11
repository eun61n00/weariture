const express = require("express");
const { Model } = require("sequelize");
const User = require("../models/user");
const router = express.Router();

router.get("/", async (req, res) => {
    const user = await User.findAll({});
    console.log(user);
    res.send("Hello, User");
});

router.get("/register", (req, res) => {
    res.render("register");
});

router.post("/register", async (req, res) => {
    const user = await User;
    const username = req.body.id;
    const password = req.body.password;
    const email = req.body.email;

    if (username && password && email) {
        user.create({
            username: username,
            password: password,
            email: email,
        });
        req.session.username = username;
        req.session.loggedin = true;
        res.write("<script charset='utf-8'>alert('Success to join. Please complete login.')</script>");
        res.write("<script>window.location='../user/login'</script>");
    } else {
        res.write("<script charset='utf-8'>alert('Please enter all information correctly.')</script>");
        res.write("<script>window.location='../user/register'</script>");
    }
});

router.get("/login", (req, res) => {
    console.log("로그인 페이지 진입");
    res.render("login");
});

router.post("/login", async (req, res) => {
    const username = req.body.userId;
    const userPassword = req.body.password;

    const user = await User.findOne({
        where: { username: username, password: userPassword },
    });

    if (user) {
        req.session.username = username;
        req.session.loggedin = true;
        res.redirect("/");
    } else {
        res.write("<script charset='utf-8'>alert('Incorrect id or password. Please try again.')</script>");
        res.write('<script>window.location="../user/login"</script>');
    }
});

router.get("/logout", function (req, res) {
    req.session.username = undefined;
    req.session.loggedin = false;
    res.redirect("/");
});

router.get("/mypage", function (req, res) {
    res.render("mypage", { loggedin: req.session.loggedin, username: req.session.username });
});

module.exports = router;
