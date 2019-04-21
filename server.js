'use strict';

const express = require('express');
const app = express();

console.log("The server is now running! Please go to http://localhost:8080 in your chosen web browser");

app.use(express.static('public'));

app.get('/',function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/css/style.css',function(req, res){
  res.sendFile(__dirname + '/css/style.css');
});

app.listen(8080);
