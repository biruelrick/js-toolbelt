/*
 * Library with functions to return valid number fields
 * */

(function () {
  'use strict';

  var ValidNumber = function () {
  };


  /**
   * Return true if the ObjectId is a valid number with 24 bits
   * 
   * @param {string} ObjectId
   * @returns {boolean}
   */
  ValidNumber.prototype.validateObjectId = function (ObjectId) {
    var regex = /^[0-9a-fA-F]{24}$/;
    return regex.test(ObjectId);
  };


  /**
   * Return true if the fieldToCheck contains only numbers
   * 
   * @param {string} fieldToCheck
   * @returns {boolean}
   */
  ValidNumber.prototype.isNumeric = function (fieldToCheck) {
    var regex = /^\d+$/;
    return regex.test(fieldToCheck);
  };


  module.exports = new ValidNumber();

})();

