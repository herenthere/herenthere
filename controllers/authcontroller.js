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
        var fullname = req.user.firstname + " " + req.user.lastname;
        var user = 1;
    }

    var trips = [];
    if(res.locals.user_roadtrips){
        var trips = res.locals.user_roadtrips;
    }

    console.log(trips);

    res.render('profile', {user: user, fullname: fullname, trips: trips});
}

exports.logout = function(req, res){
    req.session.destroy(function(err){
        res.redirect('/');
    });
}