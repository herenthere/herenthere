var exports = module.exports = {}

exports.signup = function(req, res){
    res.render('signup');
}

exports.login = function(req, res){;
    if(req.user){
        return res.redirect('/profile');
    }
    res.render('login', {errors: req.flash('error')});
}

exports.profile = function(req, res){
    var user = 0;
    if(req.user){
      var user = 1;
    }
    res.render('profile', {user: user});
}

exports.logout = function(req, res){
    req.session.destroy(function(err){
        res.redirect('/');
    });
}