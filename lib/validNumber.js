/*
 * Library with functions to return valid number fields
 * */

(function () {
  'use strict';

  var cnpjCpfGenerator = require('./modules/cnpjCpfGenerator');
  var ieValidator = require('./modules/ieValidator');

  var ValidNumber = function () {
  };

  /****************************************************************************/
  /* 1. Numeric Functions
  /****************************************************************************/

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

  /**
   * Return only numbers specified in fieldToModify discarding all os characters
   *
   * @param fieldToModify
   * @returns {XML|string|void}
   */
  ValidNumber.prototype.returnOnlyNumbers = function (fieldToModify) {
    return fieldToModify.replace(/\D/g, '');
  };



  /****************************************************************************/
  /* 2. Documents Functions
  /****************************************************************************/
  /**
   * Return true if the cnpjToCheck be a valid cnpj number
   *
   * @param {string} cnpjToCheck
   * @returns {boolean}
   */
  ValidNumber.prototype.isCnpj = function (cnpjToCheck) {
    if (typeof cnpjToCheck === 'undefined') return false;

    var cnpj = this.returnOnlyNumbers(cnpjToCheck);

    if (cnpj == '' ||
      cnpj.length != 14 ||
      cnpj == "00000000000000" ||
      cnpj == "11111111111111" ||
      cnpj == "22222222222222" ||
      cnpj == "33333333333333" ||
      cnpj == "44444444444444" ||
      cnpj == "55555555555555" ||
      cnpj == "66666666666666" ||
      cnpj == "77777777777777" ||
      cnpj == "88888888888888" ||
      cnpj == "99999999999999")
      return false;

    // Valida DVs
    var tamanho = cnpj.length - 2;
    var numeros = cnpj.substr(0, tamanho);
    var digitos = cnpj.substr(tamanho);
    var soma = 0;
    var pos = tamanho - 7;

    for (var i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
        pos = 9;
    }
    var resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0))
      return false;

    tamanho = tamanho + 1;
    numeros = cnpj.substr(0, tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
        pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    return resultado == digitos.charAt(1);

  };

  /**
   * Return the cnpj with Mask (99.999.999/9999-99). We can pass number and 
   * characters since is a valid cnpj, if it is not a valid, return true,
   * otherwise, return this formatted
   *
   * @param {String} cnpj
   * @returns {*}
   */
  ValidNumber.prototype.returnCnpjWithMask = function (cnpj) {
    var cnpjNumbers = this.returnOnlyNumbers(cnpj);

    if (!this.isCnpj(cnpjNumbers))
      return false;

    return cnpjNumbers.substr(0, 2) + '.' +
      cnpjNumbers.substr(2, 3) + '.' +
      cnpjNumbers.substr(5, 3) + '/' +
      cnpjNumbers.substr(8, 4) + '-' +
      cnpjNumbers.substr(12, 2);
  };

  /**
   * Return a valid and fake cnpj with or without mask, if the argument withMask
   * is true, this will return with mask (99.999.999/9999-99), otherwise, it
   * will return only numbers
   *
   * @param withMask
   * @returns {*}
   */
  ValidNumber.prototype.generateCnpj = function (withMask) {
    var cnpj = cnpjCpfGenerator.generateCnpj();

    if (withMask)
      return this.returnCnpjWithMask(cnpj);

    return cnpj;
  };

  /**
   * Check a string for valid IE
   *
   * @param {String} uf
   * @param {String} ie
   * @returns {boolean}
   */
  ValidNumber.prototype.isIE = function (uf, ie) {
    return ieValidator.validate(uf, ie);
  }

  /****************************************************************************/
  /* 3. Others Functions
  /****************************************************************************/
  /**
   * Return true if the ObjectId is a valid number with 24 bits
   *
   * @param {string} ObjectId
   * @returns {boolean}
   */
  ValidNumber.prototype.isObjectId = function (ObjectId) {
    var regex = /^[0-9a-fA-F]{24}$/;
    return regex.test(ObjectId);
  };


  module.exports = new ValidNumber();

})();

