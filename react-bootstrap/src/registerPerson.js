//pseudocode:
  //FindoutRegisterStatus
  if (registerStatus == TRUE) {
    //if registered then Show person call-sign;
  } else {
    //else not registered then Show "click to register button"

    //registration button on-click
     <button onclick="registerNewPerson()">Registration</button>
  }

  function registerNewPerson() {
    //popup on-screen form;
    //formRegistrationSubmit-Button
    //perform validation;
    performValidation = require('./performValidation.js');
    performValidation();
  }
