var db = require('../db');
const ObjectID = require('mongodb').ObjectID;

exports.all = function(cb){
  db.get().collection('users').find().toArray((err, docs)=>{
      cb(err, docs);
    });
}

exports.findById = function(id, cb){
  db.get().collection('users').findOne({_id: ObjectID(id)}, (err,doc)=>{
    cb(err, doc);
  })
}

exports.create = function(user, cb){
    db.get().collection('users').insert(user, (err, result)=>{
    cb(err, result);
  });
}

exports.change = function(id, newData, cb){
  db.get().collection('users').update(
      { _id: ObjectID(id) },
      { $set: { name: newData.name,  email: newData.email, phone: newData.phone}},
      {
          upsert: false,
          multi: false
      },
      (err, result)=>{
          cb(err, result);
      }
  );
}

exports.delete = function(id, cb){
  db.get().collection('users').deleteOne(
      { _id: ObjectID(id)},
      (err, result)=>{
          cb(err, result);
      }
  );

}
