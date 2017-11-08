var express = require('express');
var path = require('path');
var logger = require('morgan');
var compression = require('compression');
var methodOverride = require('method-override');
var passport = require('passport');
var session = require('express-session');
var flash = require('express-flash');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.load();

// Controllers
//var HomeController = require('./controllers/home');
// var userController = require('./controllers/user');
//var contactController = require('./controllers/contact');

// Passport OAuth strategies
require('./config/passport');

var app = express();


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

app.set('view engine', 'ejs');
//app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 3000);
// app.use(compression());
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(expressValidator());
// app.use(methodOverride('_method'));
// app.use(session({ secret: process.env.SESSION_SECRET, resave: true, saveUninitialized: true }));
// app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
// app.use(function(req, res, next) {
//   res.locals.user = req.user ? req.user.toJSON() : null;
//   next();
// });
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/files', express.static(path.join(__dirname, 'files')));
// app.get('/profile', userController.ensureAuthenticated, userController.profileGet);
// app.get('/contact', contactController.contactGet);
app.get('/', function(req, res){
  res.redirect('/home');
})
app.get('/login', function(req, res){
  res.render('login.ejs');
});
app.post('/login', function(req, res, next){
  req.assert('username', 'Username cannot be blank').notEmpty();
  req.assert('password', 'Password cannot be blank').notEmpty();

  var errors = req.validationErrors();

  if (errors) {
    req.flash('error', errors);
    return res.redirect('/login');
  }

  passport.authenticate('local', function(err, user, info) {
    if (!user) {
      req.flash('error', info);
    }
    req.logIn(user, function(err) {
      res.redirect('/home');
    })
  })(req, res, next);
});
app.get('/map', function(req, res){
  var departure = "";
  var destination = "";
  var departure_date = "";
  var destination_date = "";
  res.render('map.ejs', {departure: departure, destination: destination});
});
app.post('/map', function(req, res){
  var departure = req.body.departure;  
  var destination = req.body.destination;
  // console.log(req.body);
  res.render('map.ejs', {departure: departure, destination: destination});
});
app.get('/home', function(req, res){
  res.render('home.ejs');
});
app.post('/home', function(req, res){
  res.render('home.ejs');
});
app.get('/profile', function(req, res){
  res.render('profile.ejs');
});
app.post('/profile', function(req, res){
  res.render('profile.ejs');
});
app.get('/tripdetail', function(req, res){
  res.render('tripdetail.ejs');
});
app.post('/tripdetail', function(req, res){
  res.render('tripdetail.ejs');
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
