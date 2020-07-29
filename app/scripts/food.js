require("dotenv/config");
let mongoose = require('mongoose');

let dbUrl = (process.env.NODE_ENV === 'PRODUCTION') ? process.env.MONGODB_URL : process.env.TESTDB_URL;

//database connection
mongoose.connect(dbUrl || "mongodb://localhost:27017/test", { useUnifiedTopology: true,  useNewUrlParser: true, useFindAndModify: false }, err => {
    if (err) console.error.bind(console, 'connection error: ');
    console.log('Connected to DataBase');
}).then(()=>{
	
let Food = require("../model/items");
let data = [
	{
	name:   "Rajma Rice",
	price:   100,
	//unit quanity
	unit:   "Bowl",
	//nutrients
	nutrients: {
		net_energy:   140,
		//carbohydrates and fats
		protein:   5.7,
		//proten
		visible_fat:   5.9 ,
		//calcium
		calcium:   6.9 ,
		//iron
		iron:   17.8 ,
		//zinc
		zinc:   9.3,
		//mangnesium
		magnesium:   8.2,
	},
	//item category Food / Stationary
	category:   "Food",
	
},
{	name:   "Chicken" ,
	price:   100 ,
	//unit quanity
	unit:   "piece" ,
	//nutrients
	nutrients: {
		net_energy:   239,
		//carbohydrates and fats
		protein:   24,
		//proten
		visible_fat:   13.4 ,
		//calcium
		calcium:   1 ,
		//iron
		iron:   7 ,
		//zinc
		zinc:   0,
		//mangnesium
		magnesium:   5,
	},
	//item category Food / Stationary
	category:   "Food",
	
},


{	
	name: 
	  "Dosa and Sambar" ,
	price:   363 ,
	//unit quanity
	unit:   "plate" ,
	//nutrients
	nutrients: {
		net_energy:    363,
		//carbohydrates and fats
		protein:   8,
		//proten
		visible_fat:   8.3 ,
		//calcium
		calcium:   37.1 ,
		//iron
		iron:   0.9,
		//zinc
		zinc:   0.4,
		//mangnesium
		magnesium:   38.4,
	},
	//item category Food / Stationary
	category:   "Food",
	
},
{
	name:   "Pizza" ,
	price:   100 ,
	//unit quanity
	unit:   "1" ,
	//nutrients
	nutrients: {
		net_energy:   266,
		//carbohydrates and fats
		protein:   22,
		//proten
		visible_fat:  10 ,
		//calcium
		calcium:   18 ,
		//iron
		iron:   13 ,
		//zinc
		zinc:   0,
		//mangnesium
		magnesium:   6,
	},
	//item category Food / Stationary
	category:   "Food",
	
},
{
	name:   "Burger" ,
	price:   100 ,
	//unit quanity
	unit:   "1" ,
	//nutrients
	nutrients: {
		net_energy:   295,
		//carbohydrates and fats
		protein:   17,
		//proten
		visible_fat:   21 ,
		//calcium
		calcium:   10 ,
		//iron
		iron:   16 ,
		//zinc
		zinc:   0,
		//mangnesium
		magnesium:   5,
	},
	//item category Food / Stationary
	category:   "Food",
	
},
{
	name:   "Chocolater" ,
	price:   100 ,
	//unit quanity
	unit:   "1" ,
	//nutrients
	nutrients: {
		net_energy:   546,
		//carbohydrates and fats
		protein:   4.9,
		//proten
		visible_fat:   31 ,
		//calcium
		calcium:   5,
		//iron
		iron:   44 ,
		//zinc
		zinc:   0,
		//mangnesium
		magnesium:   36,
	},
	//item category Food / Stationary
	category:   "Food",
	
},

];

Food.create(data);
console.log("done");
});

