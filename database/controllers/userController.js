const User = require('./../models/userModel.js');
const user1 = new User({username: 'tummy', password: 'worm'});

function createUser(req, res, next){
  //check if user exist first
  User.findOne({username: req.body.username}, function(err, data) {
    if(err) console.log(err);
    if(!data) {
      User.create(user1, (err, data) =>{
        if (err) throw err;
        console.log(data);
        next();
      });
    }
  });
};




function verifyUser(req, res, next) {
  console.log("inside verifyUser", req.body);
  User.findOne({username: req.body.username}, function(err, data) {
    if(err) console.log(err);
    if(data) {
      if(req.body.password === data.password) {
        console.log("found user and password matches!!")
        res.send(true);
      } else {
        //redirect to signup page
        console.log('you need to sign up!');
        res.send(false);
      }
    } else {
      res.send(false);
    }
    next();
  })
}

module.exports = verifyUser;

