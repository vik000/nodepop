var express=require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//Connect to Mongoose:
require('./lib/connectMongoose');
// mongoose.connect('mongodb://localhost/nodepop');
// var db=mongoose.connection;

app.get('/',(req,res)=>{
  res.send('Hello World');
});

app.listen(3000);
console.log('running on port 3000');
