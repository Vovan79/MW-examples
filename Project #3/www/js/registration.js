$(document).ready(function () {
  getDetectedPhoneNumber();
});

PROPERTY_MOBILE_NUMBER = "mobile_number";
PROPERTY_UUID_NUMBER = "uuid_number";
PROPERTY_SMS_NUMBER = "sms_number";

/**
* Detect a phone number.
* Mobile number detection using cordova-plugin-sim. Not supported by all SIM cards.
*/
function getDetectedPhoneNumber() {
  document.addEventListener("deviceready", onDeviceReady, false);

  function onDeviceReady() {
      window.plugins.sim.getSimInfo(onSuccessPhoneNumber, onFailPhoneNumber);
  }

  function onSuccessPhoneNumber(result) {
      var detectedPhoneNumber = result.phoneNumber;

      if (detectedPhoneNumber) {
          $("#mobileNumberForm").hide();
          $("#registrationCodeForm").show();
          sendMobileNumberToGetSMS(detectedPhoneNumber);
      } else {
          $("#registrationCodeForm").hide();
          $("#mobileNumberForm").show();
      }
  }

  function onFailPhoneNumber() {
    console.log("Could not detect mobile number from SIM card.");
  }
}

/**
* Start registration. Registration a phone number and a request to the server.
*/
function startRegistration() {
  var mobileNumber = $('#mobileNumberField').val();
  sendMobileNumberToGetSMS(mobileNumber);
}

function sendMobileNumberToGetSMS(number) {
  var registrationData = {
      "mobile_number": number
  };

  $.ajax({
      method: 'POST',
      url: "https://tankerclean.com/mobile/registration/start/",
      data: JSON.stringify(registrationData),
      contentType: 'application/json'
  }).done(function() {
      writeToLocalStorage(PROPERTY_MOBILE_NUMBER, number);
      activateConfirmationCodeDialog();
  }).fail(function(error, textStatus) {
      console.log('Error response:', error, ' textStatus: ', textStatus);
  });
}

function clearMobileNumberField() {
  $("#mobileNumberField").val("").focus();
  $("#btnStartRegistration").attr("disabled", "true");
}

function validateMobileNumber(event) {
  var currentVal = event.target.value;
  if (currentVal.match(/^(?:00|\+)[1-9]{1,3}[0-9]{4,14}(?:x.+)?$/g)) {
      $("#btnStartRegistration").removeAttr("disabled");
  } else {
      $("#btnStartRegistration").attr("disabled", "true");
  }
}

/**
* Confirmation registration. Confirm a phone number by the sms and a confirm request to the server.
*/
function activateConfirmationCodeDialog() {
  $("#mobileNumberForm").hide();
  $("#registrationCodeForm").show();
}

function clearSMSNumberField() {
  $("#smsNumberField").val("").focus().removeAttr("disabled");
  $("#btnConfirmRegistration").focus().attr("disabled", "true");
}

function validateSMSNumber(event) {
  var currentVal = event.target.value;
  var SMSFieldLengthMax = 6;

  if (currentVal.length === SMSFieldLengthMax) {
      $("#smsNumberField").attr("disabled", "true");
      $("#btnConfirmRegistration").removeAttr("disabled");
  }
}

function confirmRegistration() {
  var mobileNumber = localStorage.getItem(PROPERTY_MOBILE_NUMBER);
  var smsNumber = $("#smsNumberField").val();
  var confirmationData = {
      "mobile_number": mobileNumber,
      "confirmation_code": smsNumber
  };

  $.ajax({
      method: 'POST',
      url: "https://tankerclean.com/mobile/registration/acknowledge/",
      data: JSON.stringify(confirmationData),
      contentType: 'application/json'
  }).done(function(response) {
      var token = response['usage_token'];
      writeToLocalStorage(PROPERTY_SMS_NUMBER, smsNumber);
      writeToLocalStorage(PROPERTY_UUID_NUMBER, token);
      location.href= 'index.html';
  }).fail(function(error, textStatus) {
      console.log('Error response:', error, ' textStatus: ', textStatus);
  });
}

/**
* Storing properties in the Local Storage.
*/
function writeToLocalStorage(property, value) {
  localStorage.setItem(property, value);
}
