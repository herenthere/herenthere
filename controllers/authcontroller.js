var exports = module.exports = {}

exports.signup = function(req, res){
    res.render('signup.ejs');
}

exports.login = function(req, res){
    res.render('login.ejs');
}

exports.profile = function(req, res){
    res.render('profile.ejs');
}

exports.logout = function(req, res){
    req.session.destroy(function(err){
        res.redirect('/');
    });
}