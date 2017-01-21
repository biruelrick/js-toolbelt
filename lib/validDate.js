/*
 * Library with functions to return valid date fields
 * */

(function () {
  'use strict';

  var ValidDate = function () {
  };

  /**
   * Return false if dtToCheck is a invalid/inexisting date, otherwise, return date with full digits
   * ex: 2017-1-1: return 2017-01-01
   *
   * @param dtToCheck   string date in format y-m-d, m-d-y or d-m-y. It can be with any caracter between the
   *                    parts, since it's equal one another. ex: y/m/d, y m d, y.m.d (p.s. y/m-d not works)
   * @param dtFormat    'mdy' for month (m or mm), day (d or dd) and year (yyyy), 'dmy', 'ymd' or null
   *                    if null = 'ymd' (default)
   * @returns {*}
   */
  ValidDate.prototype.isDate = function (dtToCheck, dtFormat) {
    var separator = dtToCheck.replace(/[0-9]/g, '').substr(0, 1);
    var parts = dtToCheck.split(separator);

    var y, m, d;

    switch (dtFormat) {
      case 'mdy':
        m = parts[0];
        d = parts[1];
        y = parts[2];
        break;

      case 'dmy':
        d = parts[0];
        m = parts[1];
        y = parts[2];
        break;

      default:
        y = parts[0];
        m = parts[1];
        d = parts[2];
    }

    var dt = new Date(y, m - 1, d);

    if (!dt.getFullYear() == y || !(dt.getMonth() + 1) == m || !dt.getDate() == Number(d)) {
      return false;
    } else {

      y = dt.getFullYear();
      m = ("0" + (dt.getMonth() + 1)).slice(-2);
      d = ("0" + Number(d)).slice(-2);

      switch (dtFormat) {
        case 'mdy':
          return m + separator + d + separator + y;

        case 'dmy':
          return d + separator + m + separator + y;

        default:
          return y + separator + m + separator + d;
      }
    }
  };
  
  module.exports = new ValidDate();


})();

