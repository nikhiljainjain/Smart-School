let mongoose = require("mongoose");
let Schema = mongoose.Schema;


let user = new mongoose.Schema({
	//student name
    name: { type: String, default: "Asann"},
	//gender
	gender: { type: String, default: "male"},
	//phone number
	contact: { type : Number, default: 9090909090 },
	//registration number
	regno: { type: String, default: "XXXXXXXXX"},
	//parents name
	parnetName: {type: String, default: "Asann"},
	//password for parent login
	password: {type: String, default: null },
	//restriced item list
	restItem: [{ type: Schema.Types.ObjectId, ref: "items", default: null }],
	//daily budget
	dailyBud: { type: Number, default: 100 },
	//montly budget
	monthBud: { type: Number, default: 5000 },
	//daily balance
	dailyBud: { type: Number, default: 100 },
	//montly balance
	monthBud: { type: Number, default: 5000 },
	//last login time
    loginTime: { type: Date, default: Date.now },
	//student age
	age: { type: Number, default: 10 },
});

module.exports = mongoose.model('users', user);