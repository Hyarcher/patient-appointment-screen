"use strict";

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fs = require("fs");

console.log("The server is now running! Please go to http://localhost:8080 in your chosen web browser");
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.listen(8080);

app.get("/",function(req, res){
  res.sendFile(__dirname + "/public/settings.html");
});

// Adds patient from file.
// @param {string} fileLocation - The JSON file location.
// @param {string} patientInfo - The information of the object to be added to the JSON file.

function addToPatientFile(fileLocation, patientInfo) {
  fs.readFile(fileLocation, function(err, jsonData) {
    console.log("json data" + jsonData);
    console.log("json length" + jsonData.length)

    let patients = (jsonData.length == 0) ? [] : JSON.parse(jsonData);
    patients.push({
      "patient": patientInfo.patient,
      "doctor": patientInfo.doctor,
      "room": patientInfo.room,
      "time": patientInfo.time
    })

    fs.writeFile(fileLocation, JSON.stringify(patients), function() {
      console.log("File written.");
    });
  });
}

// Removes patient from file.
// @param {string} fileLocation - The JSON file location.
// @param {string} patientName - The patient name to delete from JSON file.

function deletePatientFromFile(fileLocation, patientName){
    fs.readFile(fileLocation, function(err, jsonData) {
      console.log("json data" + jsonData);
      console.log("json length" + jsonData.length)
      if (jsonData.length == 0) {
          return;
      }
      let patients = JSON.parse(jsonData);
      patients = patients.filter((patient) => {return patient.patient != patientName});

      fs.writeFile(fileLocation, JSON.stringify(patients), function() {
        console.log("successfully deleted patient from file.");
      });
    });
}

//
// Routes
//

app.get("/allPatients", function(req, res) {
  let patientInfo = fs.readFileSync("patients.json");
  let patients = JSON.parse(patientInfo);
  res.status(200).send(patients);
});

app.post("/addPatient", function(req, res) {
  let patientInfo = {
    patient: req.body.patient,
    doctor: req.body.doctor,
    room: req.body.room,
    time: req.body.time,
  };

  console.log("Data: ");
  console.log(req.body);

  addToPatientFile("patients.json", patientInfo);
  res.status(200).send(JSON.stringify(patientInfo));
});


app.post("/deletePatient", function(req, res) {
    let patientName = req.body.patient;
    if (patientName){
        deletePatientFromFile("patients.json", patientName);
        res.status(200).send();
    } else{
        res.status(400).send();
    }
});
