const vn = require('../lib/validNumber');

describe("Checking the ValidNumber Library functions", function () {

  // *****************************************************************************************************************//
  // 1. Numeric Functions
  // *****************************************************************************************************************//
  it("Checking isNumeric(string) Function...", function () {
    expect(vn.isNumeric('12345')).toBe(true);
    expect(vn.isNumeric('abc12345')).toBe(false);
  });

  it("Checking returnOnlyNumbers(string) Function...", function () {
    expect(vn.returnOnlyNumbers('02.934.311/0001-53')).toBe('02934311000153');
  });


  // *****************************************************************************************************************//
  // 2. Documents Functions
  // *****************************************************************************************************************//
  it("Checking isCnpj(string) Function...", function () {
    expect(vn.isCnpj('02.934.311/0001-53')).toBe(true);
    expect(vn.isCnpj('02.934.311/0001-53')).toBe(true);
    expect(vn.isCnpj('s0s2s.s9s3s4s.s3s1s1s/s0s0s0s1s-s5s3s')).toBe(true);
    expect(vn.isCnpj('12.934.311/0001-53')).toBe(false);
    expect(vn.isCnpj('')).toBe(false);
    expect(vn.isCnpj()).toBe(false);
  });

  it("Checking returnCnpjWithMask(cnpj) Function...", function () {
    expect(vn.returnCnpjWithMask('02934311000153')).toBe('02.934.311/0001-53');
    expect(vn.returnCnpjWithMask('0abc29  3431--1000153')).toBe('02.934.311/0001-53');
    expect(vn.returnCnpjWithMask('12934311000153')).toBe(false);
    expect(vn.returnCnpjWithMask('abc')).toBe(false);
  });


  it("Checking generateCnpj(withMask) Function...", function () {
    expect(vn.isCnpj(vn.generateCnpj())).toBe(true);  //only numbers and sure that is a cnpj valid
    expect(vn.generateCnpj()).toMatch(/\d{1,}/);      //only numbers
    expect(vn.generateCnpj(true).length).toBe(18);    //with mask (length = 18)
  });



  // *****************************************************************************************************************//
  // 3. Others Functions
  // *****************************************************************************************************************//
  it("Checking isObjectId(ObjectId) Function...", function () {
    expect(vn.isObjectId('58835cf81490ba3ac4898f5e')).toBe(true);
    expect(vn.isObjectId()).toBe(false);
    expect(vn.isObjectId('abcdefghijklmnopqrstuvx')).toBe(false);
  });

});


describe('Show these functions with console.log() the generate examples', function () {

  it('1. Numeric Functions', function () {
    console.log(vn.isNumeric('12345'));     // true
    console.log(vn.isNumeric('abc12345'));  // false

    console.log(vn.returnOnlyNumbers('02.934.311/0001-53'));  // '02934311000153'
  });

  it('2. Documents Functions', function () {
    console.log(vn.isCnpj('02.934.311/0001-53'));                     // true
    console.log(vn.isCnpj('02.934.311/0001-53'));                     // true
    console.log(vn.isCnpj('s0s2s.s9s3s4s.s3s1s1s/s0s0s0s1s-s5s3s'));  // true
    console.log(vn.isCnpj('12.934.311/0001-53'));                     // false
    console.log(vn.isCnpj(''));                                       // false
    console.log(vn.isCnpj());                                         // false

    console.log(vn.returnCnpjWithMask('02934311000153'));         // '02.934.311/0001-53'
    console.log(vn.returnCnpjWithMask('0abc29  3431--1000153'));  // '02.934.311/0001-53'
    console.log(vn.returnCnpjWithMask('12934311000153'));         // false (is an invalid cnpj)
    console.log(vn.returnCnpjWithMask('abc'));                    // false

    console.log(vn.isCnpj(vn.generateCnpj()));  // true : confirm that is a valid cnpj (fake)
    console.log(vn.generateCnpj());             // only numbers (99999999999999) and a valid cnpj (fake)
    console.log(vn.generateCnpj(true).length);  // 18 : length with mask (99.999.999/9999-99)
  });

  it('3. Others Functions', function () {
    console.log(vn.isObjectId('58835cf81490ba3ac4898f5e')); // true);
    console.log(vn.isObjectId());                           // false);
    console.log(vn.isObjectId('abcdefghijklmnopqrstuvx'));  // false);
  });
  
});