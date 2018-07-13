var Users = require('../models/users');

exports.all = function(req,res){
  Users.all(function(err, docs){
    if(err){
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(docs);
  })
}

exports.findById = function(req, res){
  Users.findById(req.params.id, function(err, doc){
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(doc);
  })
}
exports.create = function(req, res){
  var user = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone
  };
  Users.create(user, function(err, result){
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(user);
  })
}
exports.change = function(req, res){
  Users.change(req.params.id, req.body, function(err, result){
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.sendStatus(200);;
  })
}

exports.delete = function(req, res){
  Users.delete(req.params.id, function(err, result){
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.sendStatus(200);;
  })
}
