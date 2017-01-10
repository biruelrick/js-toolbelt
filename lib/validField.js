(function () {
  'use strict';

  // dependencies resources
  var validString = require('../index').ValidString;
  var validNumber = require('../index').ValidNumber;

  var ValidField = function () {
  };

  ValidField.prototype.isValid = function (fieldType, fieldValue, fieldName, required) {

    console.log('fieldName:', fieldName);
    console.log('fieldType:', fieldType);
    console.log('fieldValue:', fieldValue);
    console.log('required:', required);

    // check if the fieldType was specified
    if (typeof fieldType === 'undefined') {
      return new Error('Fail! fieldType parameter undefined!');
    }

    // check if the fieldValue was specified
    if (typeof fieldValue === 'undefined' && required) {
      return new Error('Fail! fieldValue parameter undefined!');
    } else if (typeof fieldValue === 'undefined' && !required) {
      return true;
    }

    fieldName = fieldName !== 'undefined' ? fieldName : fieldType;

    switch (fieldType.toLowerCase()) {

      // check if the email is valid
      case "email":
        if (!validString.validateEmail(fieldValue)) {
          return new Error(fieldName + " is invalid. FieldType: email");
        } else {
          return true;
        }
        break;


      // check if the email is valid
      case "objectId":
        if (!validNumber.validateObjectId(fieldValue)) {
          return new Error(fieldName + " is invalid. FieldType: objectId");
        } else {
          return true;
        }
        break;


      // check if the brazilian telephone number is valid
      case "tel-br":
        if (!(fieldValue.length == 10 || fieldValue.length == 11) || !validateNumber.isNumber(fieldValue)) {
          return new Error(fieldName + " is invalid. FieldType: tel-br");
        } else {
          return true;
        }
        break;


      // is true if nothing to check or to validate
      default:
          return true;       
    }
  };

  module.exports = ValidField;

})();