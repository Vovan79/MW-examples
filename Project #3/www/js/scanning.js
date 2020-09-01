/**
* Scans a QR code.
*/
function scanCode() {
  cordova.plugins.barcodeScanner.scan(
    onSuccessScanCode,
    onFailScanCode,
    {
      prompt: "Place a barcode inside the scan area", // Android
      disableSuccessBeep: true // iOS and Android
    }
  );

  function onSuccessScanCode(result) {
    var result_text_as_json = JSON.parse(result.text.replace(/'/g, '"'));
    var url = result_text_as_json.url;

    var profileData = {
      'carrier': localStorage.getItem(PROPERTY_CARRIER),
      'name': localStorage.getItem(PROPERTY_NAME),
      'license': localStorage.getItem(PROPERTY_LICENSE),
      'resource': localStorage.getItem(PROPERTY_RESOURCE),
      'language': localStorage.getItem(PROPERTY_LANGUAGE)
    };

    $.ajax({
      method: 'POST',
      url: url,
      data: JSON.stringify(profileData),
      contentType: 'application/json'
    }).done(function () {
      alert('Driver profile has been sent.')
    }).fail(function (error, textStatus) {
      alert("Need to include specific error message.");
      console.log('Error response:', error, ' textStatus: ', textStatus);
    });
  }

  function onFailScanCode() {
    console.log("Error while scanning this QR code for Tankerclean Online.");
  }
}

/**
* Scans a document.
*/
function scanDocument() {
  scan.scanDoc(onSuccessScanDoc, onFailScanDoc);

  // When a camera button Save is pressed
  function onSuccessScanDoc(imageURI) {
    var usage_token = localStorage.getItem(PROPERTY_USAGE_TOKEN);
    var short_code = $("#cmrShortCodeField_input").val();

    var data = {
      'file': imageURI,
      'short_code': short_code,
      'usage_token': usage_token
    };

    var body = new FormData();
    for (var key in data) {
      body.append(key, data[key]);
    }

    $.ajax({
      method: 'POST',
      url: "https://tankerclean.com/api/cmr/",
      data: body,
      processData: false,
      contentType: false,
    }).done(function () {
      showCmrUploadSuccessMessage();
    }).fail(function (error, textStatus) {
      alert("Need to include specific error message.");
      console.log('Error response:', error, ' textStatus: ', textStatus);
    });
  }

  function onFailScanDoc() {
    cancelCmrScan();
  }
}

function cancelCmrScan() {
  $("#enterCleaningOrderShortCode").hide();
  $("#cmrShortCodeField_input").val("").removeAttr("disabled");
  $("#cmrShortCodeAcknowledgement_btn").attr("disabled", "true");
  $("#scanCmrButton").show();
}

function validateCmrShortCode(event) {
  var currentVal = event.target.value;
  var shortCodeFieldMaxLength = 6;

  if (currentVal.length === shortCodeFieldMaxLength) {
    $("#cmrShortCodeField_input").attr("disabled", "true");
    $("#cmrShortCodeAcknowledgement_btn").removeAttr("disabled");
  }
}

function showCmrUploadSuccessMessage() {
  alert("Your scanned document has been sent successfully");
}
