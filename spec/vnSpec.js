const vn = require('../lib/validNumber');

describe("Checking the ValidNumber Library functions", function () {

  // *************************************************************************//
  // 1. Numeric Functions
  // *************************************************************************//
  it("Checking isNumeric(string) Function...", function () {
    expect(vn.isNumeric('12345')).toBe(true);
    expect(vn.isNumeric('abc12345')).toBe(false);
  });

  it("Checking returnOnlyNumbers(string) Function...", function () {
    expect(vn.returnOnlyNumbers('02.934.311/0001-53')).toBe('02934311000153');
  });


  // *************************************************************************//
  // 2. Documents Functions
  // *************************************************************************//
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

  it("Cheking isIE(uf, ie) Function...", function () {
    expect(vn.isIE('AC', '01.108.037/029-85')).toBe(true);
    expect(vn.isIE('AC', '01.563.361/808-80')).toBe(true);
    expect(vn.isIE('AC', '0180791715862')).toBe(true);
    expect(vn.isIE('AL', '248051741')).toBe(true);
    expect(vn.isIE('AL', '248055569')).toBe(true);
    expect(vn.isIE('AL', '248257803')).toBe(true);
    expect(vn.isIE('AP', '033062528')).toBe(true);
    expect(vn.isIE('AP', '034776087')).toBe(true);
    expect(vn.isIE('AP', '032915268')).toBe(true);
    expect(vn.isIE('AM', '56.105.813-0')).toBe(true);
    expect(vn.isIE('AM', '85.083.737-5')).toBe(true);
    expect(vn.isIE('AM', '364159391')).toBe(true);
    expect(vn.isIE('BA', '595288-58')).toBe(true);
    expect(vn.isIE('BA', '35018805')).toBe(true);
    expect(vn.isIE('BA', '74176008')).toBe(true);
    expect(vn.isIE('CE', '32139729-0')).toBe(true);
    expect(vn.isIE('CE', '28670766-7')).toBe(true);
    expect(vn.isIE('CE', '955649331')).toBe(true);
    expect(vn.isIE('DF', '07240571001-97')).toBe(true);
    expect(vn.isIE('DF', '07082663001-54')).toBe(true);
    expect(vn.isIE('DF', '07322435001-92')).toBe(true);
    expect(vn.isIE('ES', '37013705-1')).toBe(true);
    expect(vn.isIE('ES', '57188001-0')).toBe(true);
    expect(vn.isIE('ES', '07318586-8')).toBe(true);
    expect(vn.isIE('GO', '15.900.927-8')).toBe(true);
    expect(vn.isIE('GO', '10.503.306-5')).toBe(true);
    expect(vn.isIE('GO', '15.533.347-0')).toBe(true);
    expect(vn.isIE('MA', '12353814-9')).toBe(true);
    expect(vn.isIE('MA', '12408188-6')).toBe(true);
    expect(vn.isIE('MA', '12972601-0')).toBe(true);
    expect(vn.isIE('MT', '2396076952-7')).toBe(true);
    expect(vn.isIE('MT', '7182348368-0')).toBe(true);
    expect(vn.isIE('MT', '9399863530-8')).toBe(true);
    expect(vn.isIE('MS', '28887499-4')).toBe(true);
    expect(vn.isIE('MS', '28459317-6')).toBe(true);
    expect(vn.isIE('MS', '28063254-1')).toBe(true);
    expect(vn.isIE('MG', '282.431.515/3281')).toBe(true);
    expect(vn.isIE('MG', '096.800.632/0725')).toBe(true);
    expect(vn.isIE('MG', '408.916.248/6593')).toBe(true);
    expect(vn.isIE('PA', '15-391283-9')).toBe(true);
    expect(vn.isIE('PA', '15-749953-7')).toBe(true);
    expect(vn.isIE('PA', '15-135233-0')).toBe(true);
    expect(vn.isIE('PB', '00778214-4')).toBe(true);
    expect(vn.isIE('PB', '14145895-0')).toBe(true);
    expect(vn.isIE('PB', '92691853-2')).toBe(true);
    expect(vn.isIE('PR', '063.21764-65')).toBe(true);
    expect(vn.isIE('PR', '055.56294-60')).toBe(true);
    expect(vn.isIE('PR', '275.08986-99')).toBe(true);
    expect(vn.isIE('PE', '5854312-05')).toBe(true);
    expect(vn.isIE('PE', '3033389-03')).toBe(true);
    expect(vn.isIE('PE', '7165919-60')).toBe(true);
    expect(vn.isIE('PI', '82803521-0')).toBe(true);
    expect(vn.isIE('PI', '82638061-1')).toBe(true);
    expect(vn.isIE('PI', '82185674-0')).toBe(true);
    expect(vn.isIE('RJ', '36.837.75-6')).toBe(true);
    expect(vn.isIE('RJ', '19.905.70-5')).toBe(true);
    expect(vn.isIE('RJ', '43.304.41-0')).toBe(true);
    expect(vn.isIE('RN', '20.798.950-8')).toBe(true);
    expect(vn.isIE('RN', '20.430.898-4')).toBe(true);
    expect(vn.isIE('RN', '20.922.990-0')).toBe(true);
    expect(vn.isIE('RS', '735/1065994')).toBe(true);
    expect(vn.isIE('RS', '923/3777877')).toBe(true);
    expect(vn.isIE('RS', '931/0802478')).toBe(true);
    expect(vn.isIE('RO', '8674972749106-3')).toBe(true);
    expect(vn.isIE('RO', '1761510675719-8')).toBe(true);
    expect(vn.isIE('RO', '6701102272486-0')).toBe(true);
    expect(vn.isIE('RR', '24496383-6')).toBe(true);
    expect(vn.isIE('RR', '24402934-4')).toBe(true);
    expect(vn.isIE('RR', '24102402-0')).toBe(true);
    expect(vn.isIE('SP', '397.537.498.380')).toBe(true);
    expect(vn.isIE('SP', 'P-01100424.3/002')).toBe(true);
    expect(vn.isIE('SP', '497.253.143.689')).toBe(true);
    expect(vn.isIE('SC', '753.499.657')).toBe(true);
    expect(vn.isIE('SC', '325.927.804')).toBe(true);
    expect(vn.isIE('SC', '365.019.089')).toBe(true);
    expect(vn.isIE('SE', '67291051-9')).toBe(true);
    expect(vn.isIE('SE', '19350403-0')).toBe(true);
    expect(vn.isIE('SE', '00439169-1')).toBe(true);
    expect(vn.isIE('TO', '2703525738-0')).toBe(true);
    expect(vn.isIE('TO', '0403671559-2')).toBe(true);
    expect(vn.isIE('TO', '9503765257-7')).toBe(true);
  });

  // *************************************************************************//
  // 3. Others Functions
  // *************************************************************************//
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
