# js-toolbelt

[![npm](https://img.shields.io/npm/v/npm.svg?style=flat-square)](https://www.npmjs.com/package/js-toolbelt)
[![Github Releases](https://img.shields.io/github/downloads/atom/atom/latest/total.svg?style=flat-square)](https://github.com/rbiruel/js-toolbelt)
[![Twitter Follow](https://img.shields.io/twitter/follow/espadrine.svg?style=social&label=Follow&style=flat-square)](https://twitter.com/RicardoBiruel)


js-toolbelt.js Is a basic javascript library to help us with day-to-day development for do not waste time
with small tasks, do us wasting time researching books, google and filling our code with unnecessary lines.


## Installation

```bash
$ npm install js-toolbelt --save
```

## Usage

The current version of `js-toolbelt` has one library (ValidNumber) with a set of useful functions. To enable
them, just use the `require` as shown below:

## ValidNumber Library

```js
var vn = require('js-toolbelt').ValidNumber;
```

### Numeric Functions

`vn.isNumeric(fieldToCheck)`

Checks the fieldToCheck argument and returns true if it owns only number, otherwise returns false
```js
console.log(vn.isNumeric('12345'));     // true
console.log(vn.isNumeric('abc12345'));  // false
```

`vn.returnOnlyNumber(fieldToModify)`

Returns only numbers from the fieldToModify argument
```js
console.log('abc123/4-5'); //12345
console.log(vn.returnOnlyNumbers('02.934.311/0001-53'));  // '02934311000153'
```


### Documents Functions

`vn.isCnpj(cnpjToCheck)`

Checks if the cnpj number is a valid document, if yes return true, otherwise, false.

_P.S. cnpj is the main and only registration number of a company in Brazil, valid in national territory,
has its own format and verification code._
```js
console.log(vn.isCnpj('02.934.311/0001-53'));                     // true
console.log(vn.isCnpj('02.934.311/0001-53'));                     // true
console.log(vn.isCnpj('s0s2s.s9s3s4s.s3s1s1s/s0s0s0s1s-s5s3s'));  // true
console.log(vn.isCnpj('12.934.311/0001-53'));                     // false
console.log(vn.isCnpj(''));                                       // false
console.log(vn.isCnpj());                                         // false
```

`vn.returnCnpjWithMask(cnpj)`

Return the cnpj with a valid mask (99.999.999/9999-99)

_P.S. cnpj is the main and only registration number of a company in Brazil, valid in national territory,
has its own format and verification code._
```js
console.log(vn.returnCnpjWithMask('02934311000153'));         // '02.934.311/0001-53'
console.log(vn.returnCnpjWithMask('0abc29  3431--1000153'));  // '02.934.311/0001-53'
console.log(vn.returnCnpjWithMask('12934311000153'));         // false (is an invalid cnpj)
console.log(vn.returnCnpjWithMask('abc'));                    // false
```

`vn.generateCnpj(withMask)`

Returns a valid cnpj number (but fake). If the withMask argument is true, cnpj will returned in its default
format (02.934.311/0001-53), otherwise, it returns only numbers (02934311000153)

_P.S. cnpj is the main and only registration number of a company in Brazil, valid in national territory,
has its own format and verification code._
```js
console.log(vn.isCnpj(vn.generateCnpj()));  // true : confirm that is a valid cnpj (fake)
console.log(vn.generateCnpj());             // only numbers (99999999999999) and a valid cnpj (fake)
console.log(vn.generateCnpj(true).length);  // 18 : length with mask (99.999.999/9999-99)
```


### Others Functions

`vn.validateObjectId(ObjectId)`

Return true if the ObjectId argument is a valid ObjectId for MongoDB.
```js
console.log(vn.isObjectId('58835cf81490ba3ac4898f5e')); // true);
console.log(vn.isObjectId());                           // false);
console.log(vn.isObjectId('abcdefghijklmnopqrstuvx'));  // false);
```


## Author

 - Rick Biruel [@RicardoBiruel]

## License

(The MIT License)

Copyright (c) 2017 Rick Biruel

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


[@RicardoBiruel]: <https://twitter.com/RicardoBiruel>