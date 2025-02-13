let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let Cors = require("cors");

let indexRouter = require('./app/routes/index');
let studentRouter = require('./app/routes/student');
let parentRouter = require('./app/routes/parent');

let app = express();
let mongoose = require('mongoose');

let dbUrl = (process.env.NODE_ENV === 'PRODUCTION') ? process.env.MONGODB_URL : process.env.TESTDB_URL;

//database connection
mongoose.connect(dbUrl || "mongodb://localhost:27017/test", { useUnifiedTopology: true,  useNewUrlParser: true, useFindAndModify: false }, err => {
    if (err) console.error.bind(console, 'connection error: ');
    console.log('Connected to DataBase');
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.disable('etag');
app.disable('x-powered-by');

app.use(Cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/student', studentRouter);
app.use('/parent', parentRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

console.log(`Server running on Port ${process.env.PORT || 3000}`);
module.exports = app;
