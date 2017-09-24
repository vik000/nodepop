"use strict";

const mongoose = require("mongoose");

const conn=mongoose.connection;

conn.on('error',err=>{
  console.log("Error de conexión",err);
  process.exit(1);
});

conn.once('open',()=>{
  console.log('conectado a mongodb');
});
// la cadena de conexión es como una url, pero con protocolo mongodb
mongoose.connect('mongodb://localhost/nodepop');

//No necesitamos exporat la conexión ya que Mongoose se encargar de mantenerla internamente.
