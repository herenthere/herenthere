var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;


var User = require('../models/User');

passport.serializeUser(function(user, done) {
  done(null, user.id);
});
passport.deserializeUser(function(id, done) {
  new User({ id: id}).fetch().then(function(user) {
    done(null, user);
  });
});

passport.use(new LocalStrategy({ usernameField: 'username' }, function(username, password, done) {
  new User({ username: username })
    .fetch()
    .then(function(user) {
      if (!user) {
        return done(null, false, { msg: 'The user name ' + username + ' is not associated with any account. ' +
        'Double-check your user name and try again.' });
      }
      user.comparePassword(password, function(err, isMatch) {
        if (!isMatch) {
          return done(null, false, { msg: 'Invalid username or password' });
        }
        return done(null, user);
      });
    });
}));