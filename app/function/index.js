let User = require("../model/user");
let cookie = require("cookie");

const studentValid = (req, res, next) =>{
    let regno = cookie.parse(req.headers.cookie || '');
	if (regno != null){
		regno = regno.regno;
		User.findOne({regno}, (err, data)=>{
			if (err) throw console.error.bind(err);
			if (data){
				req.data = data;
				next();
			}else{
				res.status(302).redirect("/student/login");		  
			}
		});	
	}else{
		res.status(302).redirect("/student/login");
	}
};

const parentValid = (req, res, next) =>{
    let regno = cookie.parse(req.headers.cookie || '');
	if (regno != null){
		regno = regno.regno;
		User.findOne({regno}, (err, data)=>{
			if (err) throw console.error.bind(err);
			if (data){
				req.data = data;
				next();
			}else{
				res.status(302).redirect("/parent/login");		  
			}
		});	
	}else{
		res.status(302).redirect("/parent/login");
	}
};

module.exports = { studentValid, parentValid };