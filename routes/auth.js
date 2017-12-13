var authController = require('../controllers/authcontroller.js');
var request = require('request');

module.exports = function(app, passport, roadtripResource) {
    app.get('/signup', authController.signup);
    
    app.get('/signin', authController.login);
    
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/map',

        failureRedirect: '/signup'
        }   
    ));

    app.get('/profile', isLoggedIn, getRoadTrips, authController.profile);

    app.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/profile',

        failureRedirect: '/signin'
        }
    ));

    // app.get('/api/roadtrips', function(req, res){
        
    // })

    app.get('/logout', authController.logout);

    // Check if user is logged in
    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated()){
            return next();
        }
        res.redirect('/signin');
    }

    function getRoadTrips(req, res, next) {
        var url = req.protocol + '://' + req.get('host') + '/api/roadtrips?userid=' + req.user.id;
        console.log(url);
        // console.log(url);
        request.get(url, function(error, r, body){
            if (error) {
                throw error;
            }
            res.locals.user_roadtrips = JSON.parse(body);
            next();
            // console.log(body);
        });
    }

    function loginPost(req, res) {
        req.assert('username', 'Username cannot be blank').notEmpty();
        req.assert('password', 'Password cannot be blank').notEmpty();
    
        var errors = req.validationErrors();
    
        // console.log(errors);
    
        if(errors) {
            req.flash('error', errors);
            return res.redirect('/signin');
        }
    
        passport.authenticate('local-signin', {
            successRedirect: '/profile',
    
            failureRedirect: '/signin'
            }
        )
    }
}