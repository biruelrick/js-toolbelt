(function () {
  'use strict';
  
  var ValidString = function () {
  };


  /**
   * Check if the email has a valid format
   * 
   * @param {string} email  email to check
   * @returns {boolean}     return true if is valid
   */
  ValidString.prototype.validateEmail = function (email) {
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);  
    
  };


  /**
   * Return string with first letter in upper case
   * 
   * @param string      string with any case
   * @returns {string}  return string with only first letter in upper case ant others in lower case.
   */
  ValidString.prototype.capitalize = function (string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };
  
  
  module.exports =  new ValidString();
})();





