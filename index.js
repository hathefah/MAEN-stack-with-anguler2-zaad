const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');

mongoose.promise = global.promise;
mongoose.connect(config.uri ,(err) =>{
  if(err){
    console.log('Colud not connect to DataBase:', err);
  }else{
    ;
    console.log('connected to DataBase: ',config.db);
  }
});

app.use(express.static(__dirname + '/clint/dist'));

app.get('*', (req, res) =>{
  res.sendFile(path.join(__dirname + '/clint/dist/index.html'));
});

app.listen(8080 ,() =>{
console.log('listening on port 8080');
});
