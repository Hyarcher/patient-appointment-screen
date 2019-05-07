"use strict";


function getPatientInfo() {
  getAllPatients(
    function(patientData) {
      console.log("this happened");
      for (let i = 0; i < patientData.length; i++) {

        let pPatient = document.createElement("p");
        pPatient.className = "patient";
        pPatient.textContent = patientData[i].patient;

        let pDoctor = document.createElement("p");
        pDoctor.className = "doctor";
        pDoctor.textContent = patientData[i].doctor;

        let pRoom = document.createElement("p");
        pRoom.className = "room";
        pRoom.textContent = patientData[i].room;

        let pTime = document.createElement("p");
        pTime.className = "time";
        pTime.textContent = patientData[i].time;

        document.getElementsByClassName("patientList")[0].appendChild(pPatient);
        document.getElementsByClassName("patientList")[0].appendChild(pDoctor);
        document.getElementsByClassName("patientList")[0].appendChild(pRoom);
        document.getElementsByClassName("patientList")[0].appendChild(pTime);

      }
    });
}

getPatientInfo();

//setInterval(getPatientInfo, 1000);
