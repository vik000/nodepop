var express=require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

Spot = require('./models/Spot');
Tag = require('./models/Tags');

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

app.get('/api/spots/:id',(req,res)=>{
  const id = req.params.id;
  Spot.getSpotById(id,function (err,spot) {
    if(err){
      throw err;
    }
    res.json(spot);
  });
});

app.post('/api/spots',(req,res)=>{
  var spot = req.body;
  Spot.addSpot(function (err,spot) {
    if(err){
      throw err;
    }
    res.json(spot);
  });
});

app.get('/api/tags',(req,res)=>{
  Tag.getTag(function (err,tags) {
    if(err){
      throw err;
    }
    res.json(tags);
  });
});

app.post('/api/tags',(req,res)=>{
  var tag=req.body;
  console.log(tag);
  Tag.addTag(function(err,tag){
    if(err){
      throw err;
    }
    res.json(tag);
  }, tag);
});

app.listen(3000);
console.log('running on port 3000');

module.exports = app;
