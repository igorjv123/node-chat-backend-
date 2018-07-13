const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//const mongoose = require('mongoose');
//const mongooseConnection = require("./db/dbconnect").connection;
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const hostname = '127.0.0.1';
const port = 3000;
var usersController = require('./controllers/users');

var db = require('./db.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
  res.send('hello');
});
app.get('/users', usersController.all);

app.get('/users/:id', usersController.findById);

app.post('/users',usersController.create);

app.put('/users/:id',usersController.change);﻿

app.delete('/users/:id', usersController.delete);

db.connect('mongodb://localhost:27017/users', function(err){
    if(err){
      return console.log(err);
    }
    app.listen(port, hostname, () => {
      console.log(`Server running at http://${hostname}:${port}/`);
    });
});
//{useNewUrlParser: true},
