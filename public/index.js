"use strict";

function getPatientInfo() {
  getAllPatients(
    function(patientData) {
      let patientsDiv = document.getElementsByClassName('patients')[0];
      patientsDiv.parentNode.removeChild(patientsDiv);

      patientsDiv = document.createElement('div');
      patientsDiv.className = 'patients';
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

        patientsDiv.appendChild(pPatient);
        patientsDiv.appendChild(pDoctor);
        patientsDiv.appendChild(pRoom);
        patientsDiv.appendChild(pTime);
      }
      document.getElementsByClassName("patientList")[0].appendChild(patientsDiv);
    });
}

setInterval(getPatientInfo, 2000);
