let express = require('express');
let router = express.Router();
let Student = require("../model/user");
let Item = require('../model/items');
let cookie = require('cookie');

let { response, validRes, COOKIES_AGE } = require("../config");
let { studentValid } = require('../function');

//router.use((req, res, next)=>{
//	resp.msg = null;
//    resp.data = null;
//    resp.code = "warning";
//	next();
//});

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.send('This student portal');
});

//student login
router.post('/login', (req, res, next)=>{
	console.log(req.body.regno);
	const regno = (req.body.regno).toUpperCase();
	Student.findOne({ regno }, (err, data)=>{
		if (err) console.error.bind(err);
		if (data){
			console.log(data);
			res.setHeader('Set-Cookie', cookie.serialize('regno', String(regno), {
				maxAge: COOKIES_AGE,
				path: '/'
			}));
			res.json(validRes);//status(302).redirect("/student/dashboard");
		}else{
			res.json(response);
		}
	});
});

//cookies check
router.use(studentValid);

//sending list of items
router.get('/dashboard', (req, res, next)=>{
	Item.find({}, (err, data)=>{
		if (err) console.error.bind(err);
		if (data){
			validRes.data.items = data;
			validRes.data.restrict = req.data.restItem;
			console.log(validRes);
			res.json(validRes);
		}else
			res.json(response);
	});
});

//list of item bought by student
router.post('/buy', (req, res, next)=>{
	let data = {
		student: req.data._id,
		list: req.body.list,
		billed: 0
	};
	
	data.list.forEach((i)=>{ 
		billed += i.charge = (i.price)*qty;
	});
	
	Bought.create(data, (err)=>{
		if (err) console.error.bind(err);
	});
	console.log(data);
	res.json(validRes);
});


router.get('/logout', (req, res, next)=>{
	res.setHeader('Set-Cookie', cookie.serialize('regno', String(null), {
		maxAge: (COOKIES_AGE*0.0001),
		path: '/'
	}));
	res.status(302).redirect("/student/");
});

module.exports = router;