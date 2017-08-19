// Importing modules
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');
//const http = require('http');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var expressValidator = require('express-validator');

var app = express();

app.set('port', (process.env.PORT || 3000));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Set up mongoose connection
var mongoose = require('mongoose');

// mlab database sandbox connection
mongoose.Promise = require('bluebird');
var mongoDBUri = "mongodb://pankajdbuser:R**$#MD17pd@ds151242.mlab.com:51242/pankajdb";
// Localhost
 /* var mongoDBUri = 'mongodb://localhost/localLibrary'; */ 
mongoose.connect(mongoDBUri);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:')); 

//port number 
const port = 3000;

//Adding Middleware - cors
app.use(cors());

// Adding Middleware - body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Adding Middelware expressValidator
app.use(expressValidator()); // Add this after the bodyParser middlewares!

// Static files 
//app.use(express.static(path.join(__dirname,'public')));
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Set our api routes
/* var route = require('./routes/route');
app.use('/api', route); 
var wiki = require('./routes/wiki');
app.use('/wiki', wiki); */

// Catch all other routes and return the index file

var index = require('./routes/index'); // the default route
var users = require('./routes/users'); //Import routes for "users" area of site
var catalog = require('./routes/catalog'); //Import routes for "catalog" area of site
var contact = require('./routes/contact'); //Import routes for "contact" area of site

app.use('/', index); // the default route
app.use('/users', users);
app.use('/catalog', catalog); // Add catalog routes to middleware chain.
app.use('/contact', contact); // Add contact routes to middleware chain.



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  //next(err);
  //console.log(err);
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('errors/error');
});


/* app.listen(port, function (req, res) {
	console.log('Library API server started at port : '+port);
}); */

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

module.exports = app;