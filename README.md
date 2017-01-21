# js-toolbelt
Day by day Javascript's common functions

The js-toolbelt is a javascript package with some useful functions for use day-by-day.
the objective os this package is gain time in development.

This package is divided in the following libraries:

validNumber: Number functions (to use: var vn = require('js-toolbelt').ValidNumber;
validDate: Date functions
validString: String functions

To use a wish library, just require it in a var, example...
    var vn = require('js-toolbelt').ValidNumber;
    var vd = require('js-toolbelt').ValidDate;
    var vs = require('js-toolbelt').ValidString;

... and use yours functions, example...
    assert(vd.isDate('2017-3-24'), 'This is a valid date and will return "2017-03-24"');
    assert(vn.returnOnlyNumber('abc20a1//7'), 'This will return "2017"');



Let' go learn each function and observe how it can help us

########################################################################################################################
########################################################################################################################
# validNumber Library (var vn = require('js-toolbelt').ValidNumber;

// *****************************************************************************************************************//
// 1. Numeric Functions
// *****************************************************************************************************************//
    a. vn.isNumeric(fieldToCheck)
        *Check the fieldToCheck argument and return true if has only number, otherwise, return false
        console.log(vn.isNumeric('12345'));     // true
        console.log(vn.isNumeric('abc12345'));  // false


    b. vn.returnOnlyNumber(fieldToModify)
        *Return only number from fieldToModify argument
        console.log('abc123/4-5'); //12345
        console.log(vn.returnOnlyNumbers('02.934.311/0001-53'));  // '02934311000153'


// *****************************************************************************************************************//
// 2. Documents Functions
// *****************************************************************************************************************//
    a. vn.isCnpj(cnpjToCheck)
        *cnpj is a brazilian main/unique registry number for companies
        *Check if cnpjToCheck argument is a valid cnpj number
        console.log(vn.isCnpj('02.934.311/0001-53'));                     // true
        console.log(vn.isCnpj('02.934.311/0001-53'));                     // true
        console.log(vn.isCnpj('s0s2s.s9s3s4s.s3s1s1s/s0s0s0s1s-s5s3s'));  // true
        console.log(vn.isCnpj('12.934.311/0001-53'));                     // false
        console.log(vn.isCnpj(''));                                       // false
        console.log(vn.isCnpj());                                         // false

    b. vn.returnCnpjWithMask(cnpj)
        *Return the cnpj with a valid mask (99.999.999/9999-99)
        console.log(vn.returnCnpjWithMask('02934311000153'));         // '02.934.311/0001-53'
        console.log(vn.returnCnpjWithMask('0abc29  3431--1000153'));  // '02.934.311/0001-53'
        console.log(vn.returnCnpjWithMask('12934311000153'));         // false (is an invalid cnpj)
        console.log(vn.returnCnpjWithMask('abc'));                    // false

    c. vn.generateCnpj(withMask)
        *Return a valid (and fake) cnpj number, if the argument withMask is true, this return in a
        *patter format (99.999.999.9999/99), otherwise, only numbers (99999999999999)
        console.log(vn.isCnpj(vn.generateCnpj()));  // true : confirm that is a valid cnpj (fake)
        console.log(vn.generateCnpj());             // only numbers (99999999999999) and a valid cnpj (fake)
        console.log(vn.generateCnpj(true).length);  // 18 : length with mask (99.999.999/9999-99)

// *****************************************************************************************************************//
// 3. Others Functions
// *****************************************************************************************************************//
    a. vn.validateObjectId(ObjectId)
        *Return true if the ObjectId is a valid ObjectId for mongoDB
        console.log(vn.isObjectId('58835cf81490ba3ac4898f5e')); // true);
        console.log(vn.isObjectId());                           // false);
        console.log(vn.isObjectId('abcdefghijklmnopqrstuvx'));  // false);



########################################################################################################################
########################################################################################################################
# validDate Library (var vn = require('js-toolbelt').ValidDate;


