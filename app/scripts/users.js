require("dotenv/config");
let mongoose = require('mongoose');

let dbUrl = (process.env.NODE_ENV === 'PRODUCTION') ? process.env.MONGODB_URL : process.env.TESTDB_URL;

//database connection
mongoose.connect(dbUrl || "mongodb://localhost:27017/test", { useUnifiedTopology: true,  useNewUrlParser: true, useFindAndModify: false }, err => {
    if (err) console.error.bind(console, 'connection error: ');
    console.log('Connected to DataBase');
});


let Student = require('../model/user');
let Faker = require("faker");

let data = [];

data.push({regno: "17BCI0012"});
data.push({regno: "17bCE2250"});
data.push({regno:"17bce0195"});

Student.create(data, (err)=>{
	if (err) console.error.bind(err);
});

console.log("data entered", data);