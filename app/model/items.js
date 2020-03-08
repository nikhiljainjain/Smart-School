let mongoose = require("mongoose");

let item = new mongoose.Schema({
	//food item name
	name: { type: String, default: "pizza" },
	//price
	price: { type: Number, default: 100 },
	//unit quanity
	unit: { type: String, default: "Bowl" },
	//nutrients
	nutrients: {
		net_energy: { type: Number, default: 201},
		//carbohydrates and fats
		fats: { type: Number, default: 100 },
		//proten
		protein: { type: Number, default: 100 },
		//calcium
		calcium: { type: Number, default: 100 },
		//iron
		iron: { type: Number, default: 100 },
		//zinc
		zinc: { type: Number, default: 100},
		//mangnesium
		mangnesium: { type: Number, default: 100},
	},
	//item category Food / Stationary
	category: { type: String, default: "Food"},
});

module.exports = mongoose.model('items', item);