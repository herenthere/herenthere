var express = require('express');
var app = express();
var path = require('path');
var logger = require('morgan');
var compression = require('compression');
var methodOverride = require('method-override');
var flash = require('express-flash');
var dotenv = require('dotenv');
var passport = require('passport');
var session = require('express-session');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

// BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport
app.use(session({
  secret: 'herenthere',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.set('view engine', 'ejs');

// Load environment variables from .env file
dotenv.load();

// Models
var models = require("./models");

// Passport strategies
require('./config/passport.js')(passport, models.user);

// Sync database
models.sequelize.sync().then(function(){
  console.log("db works!")
}).catch(function(err){
  console.log(err, "something went wrong!")
});

// Routes
var authRoute = require('./routes/auth.js')(app, passport);

//var HomeController = require('./controllers/home');
// var userController = require('./controllers/user');
//var contactController = require('./controllers/contact');

// var hbs = exphbs.create({
//   defaultLayout: 'main',
//   helpers: {
//     ifeq: function(a, b, options) {
//       if (a === b) {
//         return options.fn(this);
//       }
//       return options.inverse(this);
//     },
//     toJSON : function(object) {
//       return JSON.stringify(object);
//     }
//   }
// });

//app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 3000);
// app.use(compression());
// app.use(logger('dev'));

// app.use(expressValidator());
// app.use(methodOverride('_method'));
// app.use(session({ secret: process.env.SESSION_SECRET, resave: true, saveUninitialized: true }));
// app.use(flash());

// app.use(function(req, res, next) {
//   res.locals.user = req.user ? req.user.toJSON() : null;
//   next();
// });
// app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function(req, res){
  res.redirect('/home');
})
app.use('/files', express.static(path.join(__dirname, 'files')));
// app.get('/profile', userController.ensureAuthenticated, userController.profileGet);
// app.get('/contact', contactController.contactGet);
app.get('/map', function(req, res){
  var departure = "";
  var destination = "";
  var departureplaceid = "";
  var destinationplaceid = "";
  var departure_date = "";
  var destination_date = "";
  var user = 0;
  res.render('map.ejs', {departure: departure, destination: destination, departureplaceid: departureplaceid, destinationplaceid: destinationplaceid, user: user});
});
app.post('/map', function(req, res){
  var departure = req.body.departure;  
  var destination = req.body.destination;
  var departureplaceid = req.body.originplaceid;
  var destinationplaceid = req.body.destinationplaceid;
  var user = 0;
  // console.log(req.body);
  res.render('map.ejs', {departure: departure, destination: destination, departureplaceid: departureplaceid, destinationplaceid: destinationplaceid, user: user});
});
app.get('/home', function(req, res){
  var user = 0;
  res.render('home.ejs', {user: user});
});
app.post('/home', function(req, res){
  var user = 0;
  res.render('home.ejs', {user: user});
});
app.get('/profile', function(req, res){
  var user = 0;
  res.render('profile.ejs', {user: user});
});
app.post('/profile', function(req, res){
  var user = 0;
  res.render('profile.ejs', {user: user});
});
app.get('/tripdetail', function(req, res){
  var user = 1;
  res.render('tripdetail.ejs', {user: user});
});
app.post('/tripdetail', function(req, res){
  var user = 1;
  res.render('tripdetail.ejs', {user: user});
});
app.get('/aboutus', function(req, res){
  var user = 0;
  res.render('aboutus.ejs', {user: user});
});
app.post('/aboutus', function(req, res){
  var user = 0;
  res.render('aboutus.ejs', {user: user});
});
app.get('/help', function(req, res){
  var user = 0;
  res.render('help.ejs', {user: user});
});
app.post('/help', function(req, res){
  var user = 0;
  res.render('help.ejs', {user: user});
}); 
// app.get('/account', userController.ensureAuthenticated, userController.accountGet);
// app.put('/account', userController.ensureAuthenticated, userController.accountPut);
// app.delete('/account', userController.ensureAuthenticated, userController.accountDelete);
// app.get('/signup', userController.signupGet);
// app.post('/signup', userController.signupPost);
// app.get('/login', userController.loginGet);
// app.post('/login', userController.loginPost);
// app.get('/forgot', userController.forgotGet);
// app.post('/forgot', userController.forgotPost);
// app.get('/reset/:token', userController.resetGet);
// app.post('/reset/:token', userController.resetPost);
// app.get('/logout', userController.logout);
// app.get('/unlink/:provider', userController.ensureAuthenticated, userController.unlink);
// app.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email', 'user_location'] }));
// app.get('/auth/facebook/callback', passport.authenticate('facebook', { successRedirect: '/', failureRedirect: '/login' }));
// app.get('/auth/google', passport.authenticate('google', { scope: 'profile email' }));
// app.get('/auth/google/callback', passport.authenticate('google', { successRedirect: '/', failureRedirect: '/login' }));

// Production error handler
if (app.get('env') === 'production') {
  app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.sendStatus(err.status || 500);
  });
}

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});

module.exports = app;
