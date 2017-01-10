/*
 * Library with http functions 
 * */

(function () {
  'use strict';

  var Http = function () {
  };


  /**
   * return the value of a url argument specified on name parameter. This funciton works only in front-end application
   * if you use back-end application like nodejs, I encourage to use http get
   * 
   * @param {string} name   name of a parameter on url
   * @param {string} url    url (optional), if not declared = actual url
   * @param {function} fn   Callback (optional) function
   * @returns {*}           Return the result as string or callback
   */
  Http.prototype.getUrlParameterByName = function (name, url, fn) {
    if (typeof window === 'undefined') {
      console.log('window property is not valid on backend application');
      return null;
    }
    
    if (!url) {
      url = window.location.href;
    }

    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
    var results = regex.exec(url);

    if (!results) return null;
    if (!results[2]) return '';

    results = decodeURIComponent(results[2].replace(/\+/g, " "));

    if (typeof fn == 'function') {
      fn(results);
    } else {
      return results;
    }
  };

  module.exports = new Http();

})();