let User = require("../model/user");
let cookie = require("cookie");

const studentValid = (req, res, next) =>{
	req.data = {
		"name": "Asann",
        "gender": "male",
        "contact": 9090909090,
        "regno": "17BCI0012",
        "parnetName": "Asann",
        "password": null,
        "restItem": [],
        "dailyBud": 100,
        "monthBud": 5000,
        "age": 10,
        "_id": "5e64b692153a78259089fd76",
        "loginTime": "2020-03-08T09:10:42.445Z",
        "__v": 0
	};
	next();
	
    /*let regno = cookie.parse(req.headers.cookie || '') || "";
	if (regno != null){
		regno = regno.regno || "17BCE0012";
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
	}*/
};

const parentValid = (req, res, next) =>{
	req.data = {
		"name": "Asann",
        "gender": "male",
        "contact": 9090909090,
        "regno": "17BCI0012",
        "parnetName": "Asann",
        "password": null,
        "restItem": [],
        "dailyBud": 100,
        "monthBud": 5000,
        "age": 10,
        "_id": "5e64b692153a78259089fd76",
        "loginTime": "2020-03-08T09:10:42.445Z",
        "__v": 0
	};
	next();
	
//    let regno = cookie.parse(req.headers.cookie || '');
//	if (regno != null){
//		regno = regno.regno;
//		User.findOne({regno}, (err, data)=>{
//			if (err) throw console.error.bind(err);
//			if (data){
//				//req.data = data;
//				next();
//			}else{
//				res.status(302).redirect("/parent/login");		  
//			}
//		});	
//	}else{
//		res.status(302).redirect("/parent/login");
//	}
};

module.exports = { studentValid, parentValid };