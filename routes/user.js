const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const mysql = require('mysql');
const session = require('express-session');
const connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'web2022',
	password : 'P@ssw0rd!',
	database : 'WEARITURE'
});

const router = express.Router();
let rootdir = process.env.PWD;

router.use(express.static(rootdir + "/public"));

router.get('/', (req, res) => {
	res.send("Hello, User");
});

module.exports = router;