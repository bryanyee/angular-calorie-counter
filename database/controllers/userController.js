const User = require('./../models/userModel.js');
let user1 = new User({username: 'tummy', password: 'worm'});

var createUser = function(req, res, next){
  User.create(user1, (err, data) =>{
  if (err) throw err;
  console.log(data);
  next();
});
};

var findUser = function(req, res, next) {
  User.findOne({username: 'tummy'}, function(err, data) {
    if(err) console.log(err);

    console.log(data);
    next();
  })
}

module.exports = createUser, findUser;

