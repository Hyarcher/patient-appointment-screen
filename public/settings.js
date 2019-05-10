"use strict";

// Posts the patient taking all the values of the elements by ID's.
function postPatient() {
  let patientName = document.getElementById("patientName").value;
  let doctorName = document.getElementById("doctorName").value;
  let room = document.getElementById("room").value;
  let time = document.getElementById("time").value;

  // Inputs cannot be empty.
  if (patientName.length == 0 || doctorName.length == 0 || room.length == 0 || time.length == 0) {
    alert("Invalid input: no input fields can be empty");
    return;
  }

  let xhttp = new XMLHttpRequest();
  xhttp.open("POST", "/addPatient", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("patient=" + patientName + "&doctor=" + doctorName + "&room=" + room + "&time=" + time);

}

// Gets the patients and puts creates the options for them in the drop-down menu.
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

// Ajax POST request to delete patients. Sends the value from the delete patient drop-down box.
function deletePatient() {
  let patientName = document.querySelector("#dropbtn").value;
  let xhttp = new XMLHttpRequest();
  xhttp.open("POST", "/deletePatient", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("patient=" + patientName);
  location.reload();
}

// Event listener for the help icon. On clicking, it shows the settings help
// information and then hides it on the second click.
document.querySelector("#helpSymbol").addEventListener("click", function() {
  let helpInfo = document.querySelector("#helpInfo");
  helpInfo.style.display === "block" ? helpInfo.style.display = "none" : helpInfo.style.display = "block";
});

// Event listener for opening the display screen in a separate tab.
document.querySelector("#seeDisplay").addEventListener("click", function() {
  window.open("screen.html");
});

window.onload = function() {
  getPatientsToDelete();
}
