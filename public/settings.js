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
  xhttp.open("POST", "/patientInfo", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("patient=" + patientName + "&doctor=" + doctorName + "&room=" + room + "&time=" + time);

}

document.querySelector("#helpSymbol").addEventListener("click", function() {
  document.querySelector("#settingsHeader").style.display = "none";
  document.querySelector("#settingBlocks").style.display = "none";
});

//if (document.querySelector("#settingsHeader").style.display = "none" && document.querySelector("#settingBlocks").style.display = "none"){
//document.querySelector
//}
