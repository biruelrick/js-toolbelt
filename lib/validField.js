(function () {
  'use strict';

  // dependencies resources
  var vs = require('./validString');
  var vn = require('./validNumber');

  var ValidField = function () {
  };
  
  
  /**
   * return true if the email is valid or false, otherwise.
   * 
   * @param {string} email
   * @returns {boolean}
   */
  ValidField.prototype.isEmail = function (email) {
    return vs.validateEmail(email);
  };


  /**
   * return true if the parseOnlyNumber has only number or false, otherwise.
   *
   * @param {string} parseOnlyNumber
   * @returns {boolean}
   */
  ValidField.prototype.isNumeric = function (parseOnlyNumber) {
    return vn.isNumeric(parseOnlyNumber);
  };


  /**
   * return true if the telBr is valid or false, otherwise.
   *
   * @param {string} telBr
   * @returns {boolean}
   */
  ValidField.prototype.isTelBr = function (telBr) {
    return (telBr.length >= 10 && telBr.length <= 11) && vn.isNumeric(telBr);
  };


  /**
   * return true if the objectId is valid or false, otherwise.
   *
   * @param {string} objectId
   * @returns {boolean}
   */
  ValidField.prototype.isObjectId = function (objectId) {
    return vn.validateObjectId(objectId);
  };



  module.exports = new ValidField();

})();