// var crypto = require('crypto');
// var bcrypt = require('bcrypt-nodejs');
// //var bookshelf = require('../config/bookshelf');

// var User = bookshelf.Model.extend({
//   tableName: 'user',
//   hasTimestamps: false,

//   initialize: function() {
//     this.on('saving', this.password, this);
//   },

//   hashPassword: function(model, attrs, options) {
//     var password = options.patch ? attrs.password : model.get('password');
//     if (!password) { return; }
//     return new Promise(function(resolve, reject) {
//       bcrypt.genSalt(10, function(err, salt) {
//         bcrypt.hash(password, salt, null, function(err, hash) {
//           if (options.patch) {
//             attrs.password = hash;
//           }
//           model.set('password', hash);
//           resolve();
//         });
//       });
//     });
//   },

//   comparePassword: function(password, done) {
//     var model = this;
//     bcrypt.compare(password, model.get('password'), function(err, isMatch) {
//       done(err, isMatch);
//     });
//   },

//   hidden: ['password'],

//   virtuals: {
//     gravatar: function() {
//       if (!this.get('username')) {
//         return 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=0ahUKEwjq-L-M5_rWAhVi94MKHa2uBiAQjBwIBA&url=https%3A%2F%2Fwww.shareicon.net%2Fdownload%2F2016%2F08%2F18%2F810223_user_512x512.png&psig=AOvVaw2ocVdi-UbH8vhw7Q8kuFsb&ust=1508437862639852';
//       }
//       var md5 = crypto.createHash('md5').update(this.get('username')).digest('hex');
//       return 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=0ahUKEwjq-L-M5_rWAhVi94MKHa2uBiAQjBwIBA&url=https%3A%2F%2Fwww.shareicon.net%2Fdownload%2F2016%2F08%2F18%2F810223_user_512x512.png&psig=AOvVaw2ocVdi-UbH8vhw7Q8kuFsb&ust=1508437862639852';
//     }
//   }
// });

// module.exports = User;
