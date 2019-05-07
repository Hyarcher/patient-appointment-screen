function getAllPatients(callback) {
  let patientRequest = new XMLHttpRequest();
  patientRequest.open('GET', '/allPatients');
  patientRequest.onload = function() {
    callback(JSON.parse(patientRequest.responseText));
  }
  patientRequest.send();
}
