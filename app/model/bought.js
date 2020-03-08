let mongoose = require("mongoose");
let Schema = mongoose.Schema;


let bill = new mongoose.Schema({
	//bill time
    time: { type: Date, default: Date.now, required: true },
	//reference to student schema
	student: { type: Schema.Types.ObjectId, ref: "users", default: null },
	//item bought of day
	list: [{
		//product details
		item: { type: Schema.Types.ObjectId, ref: "items", default: null },
		//quantity
		qty: { type: Number, default: 1 },
		//charges 
		charge: { type: Number, default: 100},
	}],
	billed: { type: Number, default: 100 }
});

module.exports = mongoose.model('bills', bill);