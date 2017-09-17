var express=require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

Spot = require('./models/Spot');

//Connect to Mongoose:
require('./lib/connectMongoose');
// mongoose.connect('mongodb://localhost/nodepop');
// var db=mongoose.connection;

app.get('/',(req,res)=>{
  res.send('Hello World');
});

app.get('/api/spots',(req,res)=>{
  Spot.getSpots(function (err,spots) {
    if(err){
      throw err;
    }
    res.json(spots);
  });
});

app.listen(3000);
console.log('running on port 3000');
