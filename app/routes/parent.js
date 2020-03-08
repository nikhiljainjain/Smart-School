let express = require('express');
let router = express.Router();
let Parent = require("../model/user");
let Item = require('../model/items');
let Bought = require('../model/bought');
let cookie = require('cookie');

let { response, validRes, COOKIES_AGE } = require("../config");
let { parentValid } =  require("../function");

//let resp = {
//    msg: null,
//    data: null,
//    code: "warning",
//    flag: false
//};
//
//router.use((req, res, next)=>{
//	resp.msg = null;
//    resp.data = null;
//    resp.code = "warning";
//	next();
//});

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.send('Parents page loading');
});

//parent login system
router.post('/login', (req, res, next)=>{
	const { regno } = ((req.body.regno).trim()).toUpperCase();
	Parent.findOne({ regno }, (err, data)=>{
		if (err) console.error.bind(err);
		if (data){
			res.setHeader('Set-Cookie', cookie.serialize('regno', String(regno), {
				maxAge: COOKIES_AGE,
				path: '/'
			}));
			res.json(validRes);//status(302).redirect("/parent/dashboard");
		}else{
			res.json(response);
		}
	});
});

//cookies checking
router.use(parentValid);

//
router.get('/dashboard', (req, res, next)=>{
	validRes.data.personal = req.data;
	Bought.find({student: req.data._id}).populate("item").exec((err, data)=>{
		if (err) throw err;
		validRes.data.bought = data;
		console.log(validRes);
		res.json(validRes);
	});
});

module.exports = router;
