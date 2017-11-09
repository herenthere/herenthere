var authController = require('../controllers/authcontroller.js');

module.exports = function(app, passport) {
    app.get('/signup', authController.signup);
    
    app.get('/login', authController.login);

    app.get('/logout', authController.logout);

    app.get('/profile', isLoggedIn, authController.profile);
    
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/home',

        failureRedirect: '/signup'
        }   
    ));

    app.post('/login', passport.authenticate('local-signin', {
        successRedirect: '/home',

        failureRedirect: '/login'
        }   
    ));


    // Check if user is logged in
    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/login');
    }
}