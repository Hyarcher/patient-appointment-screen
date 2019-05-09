"use strict";

function postPatient() {
  let patientName = document.getElementById("patientName").value;
  let doctorName = document.getElementById("doctorName").value;
  let room = document.getElementById("room").value;
  let time = document.getElementById("time").value;

  if (patientName.length == 0) {
    alert("Invalid input");
    return;
  }

  let xhttp = new XMLHttpRequest();
  xhttp.open("POST", "/addPatient", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("patient=" + patientName + "&doctor=" + doctorName + "&room=" + room + "&time=" + time);

}

function getPatientsToDelete() {
  getAllPatients(function(patients) {
    let dropDownData = document.getElementById("dropbtn");

    for (let i = 0; i < patients.length; i++) {

      let deletionChoice = document.createElement("option");
      deletionChoice.textContent = patients[i].patient;

      dropDownData.appendChild(deletionChoice);
    }
  });
}

function deletePatient() {
  let patientName = document.querySelector("#dropbtn").value;
  let xhttp = new XMLHttpRequest();
  xhttp.open("POST", "/deletePatient", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("patient=" + patientName);
  location.reload();
}

document.querySelector("#helpSymbol").addEventListener("click", function() {
  document.querySelector("#settingsHeader").style.display = "none";
  document.querySelector("#settingBlocks").style.display = "none";
  document.querySelector("#seeDisplay").style.display = "none";
});

document.querySelector("#seeDisplay").addEventListener("click", function(){
  window.open("index.html");
});

window.onload = function (){
  getPatientsToDelete();
}
//if (document.querySelector("#settingsHeader").style.display = "none" && document.querySelector("#settingBlocks").style.display = "none"){
//document.querySelector
//}
