var authController = require('../controllers/authcontroller.js');

module.exports = function(app, passport) {
    app.get('/signup', authController.signup);
    
    app.get('/signin', authController.login);
    
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/map',

        failureRedirect: '/signup'
        }   
    ));

    app.get('/profile', isLoggedIn, authController.profile);

    app.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/profile',

        failureRedirect: '/signin'
        }   
    ));

    app.get('/logout', authController.logout);

    // Check if user is logged in
    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/login');
    }
}