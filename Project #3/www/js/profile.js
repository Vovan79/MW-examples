PROPERTY_CARRIER = "carrier_select";
PROPERTY_NAME = "driverName_input";
PROPERTY_LICENSE = "licensePlate_input";
PROPERTY_RESOURCE = "cleaningResource_input";
PROPERTY_LANGUAGE = "language_select";

var profileProperties = [
  PROPERTY_CARRIER,
  PROPERTY_NAME,
  PROPERTY_LICENSE,
  PROPERTY_RESOURCE,
  PROPERTY_LANGUAGE
];

function showProfile() {
  $("#checkInApp").hide();
  $("#driverProfileApp").hide();
  $("#scanCmrDocumentApp").hide();
  $("#driverProfileInfoBlock").show();

  //Get the profile fields values from the Local Storage
  profileProperties.forEach(function (item) {
    var elemID = item;
    var elemValue = localStorage.getItem(elemID);
    $("#" + elemID + "").val(elemValue);
  });
}

function closeDriverProfileInfoBlock() {
  $("#driverProfileInfoBlock").hide();
  $("#checkInApp").show();
  $("#driverProfileApp").show();
  $("#scanCmrDocumentApp").show();
}

function saveProfile(event, input) {
  var elem = event.target.id;

  // Modify input of the field to the upper cases
  if(input === 'toUpperCase') {
    var inputValue = event.target.value;
    var outputValue = inputValue.toUpperCase();

    $("#" + elem + "").val(outputValue);
  }

  //Record the profile fields values to the Local Storage
  profileProperties.forEach(function (item) {
    var elemID = item;
    var elemValue = $("#" + elemID + "").val();

    localStorage.setItem(elemID, elemValue);
  });
}
