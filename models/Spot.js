"use strict";

const mongoose = require('mongoose');

//definie un esquema:
const spotSchema = mongoose.Schema({
  name:{
    type:String,
    index:true
  },
  offer:{type:String},
  price:Number,
  pic:{
    type:String
  },
  tag:{type:String}
},
{
  collection:'spots' //para elegir nosotro cómo se llama la colección en la base de datos.
});

//Añadimos método estático:
// spotSchema.statics.list=function(filter,limit,skip,callback){ //list es el nombre que le damos.
//   const query= Spot.find(filter);
//   query.skip(skip);
//   query.limit(limit);
//   query.exec(callback);//ejecutamos la consulta en esta línea
// };

//crear el modelo:
var Spot = module.exports = mongoose.model('Spot',spotSchema); //en teoría no hace falta hacer =module.exports

//Función get para spots:
module.exports.getSpots=function(callback,limit){
  Spot.find(callback).limit(limit);
}

//Función get por id:
module.exports.getSpotById=function(id,callback){
  Spot.findById(id,callback);
}

//Función crear spot:
module.exports.addSpot=function(callback,spot){
  Spot.create(spot, function(err,callback){
    if(err){
      console.log('Error',err);
      next(err);
      return;
    }
    res.json(spot);
  });
}
