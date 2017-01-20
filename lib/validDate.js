/*
 * Library with functions to return valid date fields
 * */

(function () {
  'use strict';

  var ValidDate = function () {
  };

  /**
   * Return true if the dateToCheck is a valid/existing date, otherwise, false.
   *
   * @param dtToCheck   string date in format y-m-d, m-d-y or d-m-y. It can be with any caracter between the
   *                    parts, since it's equal one another. ex: y/m/d, y m d, y.m.d (p.s. y/m-d not works)
   * @param dtFormat    'mdy' for month (m or mm), day (d or dd) and year (yyyy), 'dmy', 'ymd' or null
   *                    if null = 'ymd' (default)
   * @returns {boolean}
   */
  ValidDate.prototype.isDate = function (dtToCheck, dtFormat) {
    var parts = dtToCheck.split(dtToCheck.replace(/[0-9]/g, '').substr(0, 1));

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

    return dt.getFullYear() == y && (dt.getMonth() + 1) == m && dt.getDate() == Number(d);
  };


  module.exports = new ValidDate();


})();

