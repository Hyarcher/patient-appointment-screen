'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require("fs");

console.log("The server is now running! Please go to http://localhost:8080 in your chosen web browser");

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.listen(8080);

function addToPatientFile(fileLocation, patientInfo){
  fs.readFile(fileLocation, function(err, jsonData){
    console.log("json data" + jsonData);
    console.log("json length" + jsonData.length)
    let obj = null;
    if (jsonData == '') {
      obj = [];
    }else {
      obj = JSON.parse(jsonData);
    }
    obj.push({"patient": patientInfo.patient, "doctor": patientInfo.doctor, "room": patientInfo.room, "time": patientInfo.time})
    fs.writeFile(fileLocation, JSON.stringify(obj), function(){
      console.log('File written.');
    });
  });
}

app.get('/allPatients', function(req, res){
  let patientInfo = fs.readFileSync('patients.json');
  let patients = JSON.parse(patientInfo);
  res.send(patients);
});

app.post('/patientInfo', function(req, res){
  let patientInformation = {
     patient: req.body.patient,
     doctor: req.body.doctor,
     room: req.body.room,
     time: req.body.time,
  };
  console.log('Sent data: ');
  console.log(req.body);
  addToPatientFile('patients.json', patientInformation);
  res.send(JSON.stringify(patientInformation));
});
