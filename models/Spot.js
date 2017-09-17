"use strict";

const mongoose = require('mongoose');

//definie un esquema:
const spotSchema = mongoose.Schema({
  name:{
    type:String,
    index:true
  },
  age:Number
},{
  collection:'spots' //para elegir nosotro cómo se llama la colección en la base de datos.
});

//Añadimos método estático:
spotSchema.statics.list=function(filter,limit,skip,callback){ //list es el nombre que le damos.
  const query= Spot.find(filter);
  query.skip(skip);
  query.limit(limit);
  query.exec(callback);//ejecutamos la consulta en esta línea
};

//crear el modelo:
var Spot = mongoose.model('Spot',spotSchema);
