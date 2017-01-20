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
   * Return only numbers specified in fieldToModify discarding all os characters
   * 
   * @param fieldToModify
   * @returns {XML|string|void}
   */
  ValidNumber.prototype.returnOnlyNumbers = function (fieldToModify) {
    return fieldToModify.replace(/\D/g, '');
  };


  module.exports = new ValidNumber();

})();

