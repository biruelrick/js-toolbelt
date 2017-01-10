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
   * Return true if the numbers field contain only numbers
   * 
   * @param {number} numbers
   * @returns {boolean}
   */
  ValidNumber.prototype.isNumber = function (numbers) {
    var regex = /^\d+$/;
    return regex.test(numbers);
  };


  module.exports = new ValidNumber();

})();

