var passport = require('passport');
var bCrypt = require('bcrypt-nodejs');
// var User = require('../models/User');

module.exports = function(passport, user){
  var User = user;
  var LocalStrategy = require('passport-local').Strategy;

  passport.use('local-signup', new LocalStrategy(
    {
      usernameField: 'username',
      passwordField: 'password',
      passReqToCallBack: true // pass entire ref to callback
    },
  
    function(req, username, password, done){
      var generateHash = function(password){
        return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
      };
  
      User.findOne({
        where: {
          username: username
        }
      }).then(function(user){
        if(user){
          return done(null, false, {
            message: 'That username is already taken'
          });
        } else{
          var userPassword = generateHash(password);
  
          console.log(req.body);

          var data = {
            UserName: username,
            FirstName: req.body.firstname,
            LastName: req.body.lastname,
            Password: userPassword,
            Email: req.body.email
          };
  
          User.create(data).then(function(newUser, created){
            if(!newUser){
              return done(null, false);
            }
            
            if(newUser){
              return done(null, newUser);
            }
            
          });
        }
      });
    }
  ));

  passport.use('local-signin', new LocalStrategy(
    {
      usernameField: 'username',
      passwordField: 'password',
      passReqToCallBack: true
    },

    function(req, username, password, done){
      var User = user;

      var isValidPassword = function(userpass, password){
        return bCrypt.compareSync(password, userpass);
      }

      User.findOne({
        where:{
          username: username
        }
      }).then(function(user){
        if(!user){
          return done(null, false, {
            message: 'User does not exist'
          });
        }
        
        if(!isvalidPassword(user.password, password)){
          return done(null, false, {
            message: 'Incorrect password.'
          });
        }

        var userinfo = user.get();
        return done(null, userinfo);
      }).catch(function(err){
        console.log(username);
        console.log("Error:", err);

        return done(done, false, {
          message: 'Something went wrong with your signin'
        });
      });
    }

  ));
  
  passport.serializeUser(function(userid, done){
    User.findById(userid).then(function(user){
      done(null, user.userid);
    });
  });

  passport.deserializeUser(function(userid, done){
    User.findById(userid).then(function(user){
      if(user){
        done(null, user.get());
      } else{
        done(user.errors, null);
      }
    });
  })
}




// passport.serializeUser(function(user, done) {
//   done(null, user.id);
// });
// passport.deserializeUser(function(id, done) {
//   new User({ id: id}).fetch().then(function(user) {
//     done(null, user);
//   });
// });

// passport.use('local-login', new LocalStrategy(
//   {
//     usernameField: 'username',
//     passwordField: 'password',
//     passReqToCallBack: true // pass entire ref to callback
//   },

//   function(req, username, password, done){
//     var generateHash = function(password){
//       return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
//     }
//   }
// ));


// passport.use(new LocalStrategy({ usernameField: 'username' }, function(username, password, done) {
//   new User({ username: username })
//     .fetch()
//     .then(function(user) {
//       if (!user) {
//         return done(null, false, { msg: 'The user name ' + username + ' is not associated with any account. ' +
//         'Double-check your user name and try again.' });
//       }
//       user.comparePassword(password, function(err, isMatch) {
//         if (!isMatch) {
//           return done(null, false, { msg: 'Invalid username or password' });
//         }
//         return done(null, user);
//       });
//     });
// }));