function validatePhone(phoneInput) {
  var phoneText = document.getElementById(phoneInput).value;
  // This filter asks for something like (12345), so parentheses with any number (at least 1)
  // of digits
  var phoneReg = /^\(?([0-9]{3})\)?[-]?([0-9]{3})[-]?([0-9]{4})$/;
  if (phoneReg.test(phoneText)) {
    return true;
  } else {
    return false;
  }
}

function validateCard(card) {
  var creditC = document.getElementById(card).value;
  // This filter asks for something like (12345), so parentheses with any number (at least 1)
  // of digits
  var creditReg = /^\(?([0-9]{4})\)?[ ]?([0-9]{4})[ ]?([0-9]{4}[ ]?([0-9]{4}))$/;
  if (creditReg.test(creditC)) {
    return true;
  } else {
    return false;
  }
}

$(document).ready(function() {
  // phone validation, it calls validatePhone
  // and also some feedback as an Alert + putting a value in the input that shows the format required
  // the "addClass" will use the class "error" defined in style.css and add it to the phone input
  // The "error" class in style.css defines yellow background and red foreground
  $("#phone").on("change", function() {
    if (!validatePhone("phone")) {
      alert("Please re-enter phone number in the correct format.");
      $("#phone").val("");
    }
  });

  //credit card validation
  $("#creditCard").on("change", function() {
    if (!validateCard("creditCard")) {
      alert("Please re-enter your credit card number in the correct format.");
      $("#creditCard").val("");
    }
  });
});
