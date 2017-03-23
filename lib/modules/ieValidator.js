'use strict';

let ieFuncs = {
  'AC': {
    validate: validate_ie_ac
  },
  'AL': {
    validate: validate_ie_al
  },
  'AP': {
    validate: validate_ie_ap
  },
  'AM': {
    validate: validate_ie_am
  },
  'BA': {
    validate: validate_ie_ba
  },
  'CE': {
    validate: validate_ie_ce
  },
  'DF': {
    validate: validate_ie_df
  },
  'ES': {
    validate: validate_ie_es
  },
  'GO': {
    validate: validate_ie_go
  },
  'MA': {
    validate: validate_ie_ma
  },
  'MT': {
    validate: validate_ie_mt
  },
  'MS': {
    validate: validate_ie_ms
  },
  'MG': {
    validate: validate_ie_mg
  },
  'PA': {
    validate: validate_ie_pa
  },
  'PB': {
    validate: validate_ie_pb
  },
  'PR': {
    validate: validate_ie_pr
  },
  'PE': {
    validate: validate_ie_pe
  },
  'PI': {
    validate: validate_ie_pi
  },
  'RJ': {
    validate: validate_ie_rj
  },
  'RN': {
    validate: validate_ie_rn
  },
  'RS': {
    validate: validate_ie_rs
  },
  'RO': {
    validate: validate_ie_ro
  },
  'RR': {
    validate: validate_ie_rr
  },
  'SC': {
    validate: validate_ie_sc
  },
  'SP': {
    validate: validate_ie_sp
  },
  'SE': {
    validate: validate_ie_se
  },
  'TO': {
    validate: validate_ie_to
  }
};

function validate(uf, ie)
{
  uf = uf.toUpperCase();
  if (!ieFuncs[uf])
    return false;

  return ieFuncs[uf].validate(ie);
}

/**
 * Internal Functions
 */

/* Clears document */
function ieClear(str, r)
{
  r = r || /\D/g;

  return str.replace(r, '');
}

/* Sum to be used with modulo 11 */
function sumModulo11(number, opts)
{
  let size = 0;
  let min = 2;
  let max = 9;
  let cnt = 0;

  if (opts) {
    size = opts.size || size;
    min = opts.min || min;
    max = opts.max || max;
    cnt = opts.cnt || cnt;
  }

  let i = number.length - 1;
  let sum = 0;
  let diff = max - min + 1;

  while (i >= 0)
    sum += Number(number[i--]) * ((cnt++ % diff) + min);

  return sum;
}

/* Modulo 11 function */
function modulo11(number, opts)
{
  let sum = sumModulo11(number, opts);
  let sub10 = false;

  if (opts)
    sub10 = opts.sub10 || sub10;

  sum %= 11;
  sum = 11 - sum;

  if (sum > 9) {
    if (sub10)
      number += (sum - 10).toString();
    else
      number += '0';
  } else
    number += sum.toString();
  
  return number;
}

function validate_ie_ac(number)
{
  number = ieClear(number);
  if (number.length != 13)
    return false;

  number = '0'.repeat(number.length - 13) + number;
  if (number.substr(0, 2) != '01')
    return false;

  return number == modulo11(modulo11(number.substr(0, 11)));
}

function validate_ie_al(number)
{

  number = ieClear(number);
  if (!/^24[03578]\d{6}$/.test(number))
    return false;

  let _number = number.substr(0, 8);
  let sum = sumModulo11(_number);
  sum = (sum * 10);
  sum = sum - (Math.floor(sum / 11) * 11);
  if (sum > 9)
    _number += '0';
  else
    _number += sum.toString();

  return number == _number;
}

function validate_ie_ap(number)
{

  number = ieClear(number);
  if (!/^03\d{7}$/.test(number))
    return false;

  let p, d, num;
  let _number = number.substr(0, 8);
  num = Number(_number);
  if (num >= 3000001 && num <= 3017000) {
    p = 5;
    d = 0;
  } else if (num >= 3017001 && num <= 3019022) {
    p = 9;
    d = 1;
  } else {
    p = 0;
    d = 0;
  }

  let sum = p + sumModulo11(_number);
  sum = 11 - (sum % 11);

  if (sum == 10)
    sum = 0;
  else if (sum == 11)
    sum = d;

  _number += sum.toString();
  return number == _number;
}

function validate_ie_am(number)
{

  number = ieClear(number);
  if (number.length != 9)
    return false;

  return number == modulo11(number.substr(0, 8));
}

function validate_ie_ba(number)
{
  let _number, sum, dig;

  number = ieClear(number);
  if (!/^\d{8,9}$/.test(number))
    return false;

    _number = number.substr(0, number.length - 2);
    if ('679'.indexOf(number[number.length - 8]) == -1) {
      // first digit
      sum = sumModulo11(_number);
      sum = 10 - (sum % 10);

      if (sum > 9)
        dig = '0';
      else
        dig = sum.toString();

      // secound digit
      sum = sumModulo11(_number + dig);
      sum = 10 - (sum % 10);

      if (sum > 9)
        dig = '0' + dig;
      else
        dig = sum.toString() + dig;

      _number += dig;
    } else {
      // first digit
      sum = sumModulo11(_number);
      sum = 11 - (sum % 11);

      if (sum > 9)
        dig = '0';
      else
        dig = sum.toString();

      // secound digit
      sum = sumModulo11(_number + dig);
      sum = 11 - (sum % 11);

      if (sum > 9)
        dig = '0' + dig;
      else
        dig = sum.toString() + dig;

      _number += dig;
    }

  return number == _number;
}

function validate_ie_ce(number)
{

  number = ieClear(number);
  if (!/^\d{9}$/.test(number))
    return false;

  return number == modulo11(number.substr(0, 8));
}

function validate_ie_df(number)
{

  number = ieClear(number);
  if (!/^\d{13}$/.test(number))
    return false;

  return number == modulo11(modulo11(number.substr(0, 11)));
}

function validate_ie_es(number)
{

  number = ieClear(number);
  if (!/^\d{9}$/.test(number))
    return false;

  return number == modulo11(number.substr(0, 8));
}

function validate_ie_go(number)
{
  let _number, dig, sum;

  number = ieClear(number);
  if (!/^1[015]\d{7}$/.test(number))
    return false;

  _number = Number(number.substr(0, 8));
  dig = number.substr(8, 1);
  if (_number == 11094402 && (dig == '0' || dig == '1'))
    return true;

  sum = sumModulo11(_number.toString());
  sum %= 11;

  if (sum == 0 && dig == '0')
    return true;
  else if (sum == 1) {
    if (_number >= 10103105 && _number <= 10119997) {
      if (dig == '1')
        return true;
      else
        return false;
    } else if (dig == '0')
      return true;
    else
      return false;
  } else if (dig == (11 - sum).toString())
    return true;
  else
    return false;
}

function validate_ie_ma(number)
{

  number = ieClear(number);
  if (!/^12\d{7}$/.test(number))
    return false;

  return number == modulo11(number.substr(0, 8));
}

function validate_ie_mt(number)
{

  number = ieClear(number);
  if (!/^\d{11}$/.test(number))
    return false;

  return number == modulo11(number.substr(0, 10));
}

function validate_ie_ms(number)
{

  number = ieClear(number);
  if (!/^28\d{7}$/.test(number))
    return false;

  return number == modulo11(number.substr(0, 8));
}

function validate_ie_mg(number)
{
  let sum, dig, _number;

  number = ieClear(number);
  if (!/^\d{13}$/.test(number))
    return false;

  _number = number.substr(0, 3) + '0' + number.substr(3, 8);
  sum = 0;
  for (let i = 0; i < _number.length; i++) {
    let _sum = (Number(_number[i]) * ((i % 2) + 1)).toString();
    for (let j = 0; j < _sum.length; j++)
      sum += Number(_sum[j]);
  }
  dig = (10 - (sum % 10)).toString();

  _number = number.substr(0, 11) + dig;
  sum = sumModulo11(_number, { max: 11 });
  sum = 11 - (sum % 11);
  if (sum > 9)
    dig += '0';
  else
    dig += sum.toString();

  return number == number.substr(0, 11) + dig;
}

function validate_ie_pa(number)
{

  number = ieClear(number);
  if (!/^15\d{7}$/.test(number))
    return false;

  return number == modulo11(number.substr(0, 8));
}

function validate_ie_pb(number)
{

  number = ieClear(number);
  if (!/^\d{9}$/.test(number))
    return false;

  return number == modulo11(number.substr(0, 8));
}

function validate_ie_pr(number)
{

  number = ieClear(number);
  if (!/^\d{10}$/.test(number))
    return false;

  return number == modulo11(modulo11(number.substr(0, 8), { max: 7 }),
      { max: 7 });
}

function validate_ie_pe(number)
{

  number = ieClear(number);
  if (!/^(\d{9}|\d{14})$/.test(number))
    return false;

  if (number.length == 9)
    return number == modulo11(modulo11(number.substr(0, 7)));
  else
    return number == modulo11(number.substr(0, 13), { min: 1, cnt: 1, sub10: true });
}

function validate_ie_pi(number)
{

  number = ieClear(number);
  if (!/^\d{9}$/.test(number))
    return false;

  return number == modulo11(number.substr(0, 8));
}

function validate_ie_rj(number)
{

  number = ieClear(number);
  if (!/^\d{8}$/.test(number))
    return false;

  return number == modulo11(number.substr(0, 7), { max: 7 });
}

function validate_ie_rn(number)
{
  let sum, _number;

  number = ieClear(number);
  if (!/^20\d{7,8}$/.test(number))
    return false;

  _number = number.substr(0, number.length - 1);
  sum = sumModulo11(_number, { max: 10} );
  sum *= 10;
  sum %= 11;
  if (sum == 10)
    sum = 0;

  return number == _number + sum.toString();
}

function validate_ie_rs(number)
{

  number = ieClear(number);
  if (!/^\d{10}$/.test(number))
    return false;

  return number == modulo11(number.substr(0, 9));
}

function validate_ie_ro(number)
{
  let _number;

  number = ieClear(number);
  if (!/^(\d{9}|\d{14})$/.test(number))
    return false;

  if (number.length == 9)
    _number = number.slice(3, -1);
  else
    _number = number.slice(0, -1);
  _number = modulo11(_number, { sub10: true });

  return number.slice(-_number.length) == _number;
}

function validate_ie_rr(number)
{
  let sum, _number;

  number = ieClear(number);
  if (!/^24\d{7}$/.test(number))
    return false;

  _number = number.substr(0, 8);
  sum = 0;
  for (let i = 0; i < _number.length; i++)
    sum += Number(_number[i]) * (i + 1);

  _number += (sum % 9).toString();

  return number == _number;
}

function validate_ie_sc(number)
{

  number = ieClear(number);
  if (!/^\d{9}$/.test(number))
    return false;

  return number == modulo11(number.substr(0, 8));
}

function validate_ie_sp(number)
{
  let m;
  let sum = 0;
  let _number;

  // Clear string
  number = ieClear(number.toUpperCase(), /[^P0-9]/g);
  if ((m = (/^(\d{8})\d(\d{2})\d$/).exec(number))) {
    sum += Number(m[1][0]);
    sum += Number(m[1][1]) * 3;
    sum += Number(m[1][2]) * 4;
    sum += Number(m[1][3]) * 5;
    sum += Number(m[1][4]) * 6;
    sum += Number(m[1][5]) * 7;
    sum += Number(m[1][6]) * 8;
    sum += Number(m[1][7]) * 10;
    sum %= 11;
    if (sum > 9)
      sum -= 10;

    _number = m[1] + sum.toString() + m[2];
    
    sum = sumModulo11(_number, { max: 10 });
    sum %= 11;
    if (sum > 9)
      sum -= 10;

    _number = _number + sum.toString();
  }
  else if ((m = (/^P(\d{8})\d(\d{3})$/).exec(number))) {
    sum += Number(m[1][0]);
    sum += Number(m[1][1]) * 3;
    sum += Number(m[1][2]) * 4;
    sum += Number(m[1][3]) * 5;
    sum += Number(m[1][4]) * 6;
    sum += Number(m[1][5]) * 7;
    sum += Number(m[1][6]) * 8;
    sum += Number(m[1][7]) * 10;
    sum %= 11;
    if (sum > 9)
      sum -= 10;

    _number = 'P' + m[1] + sum.toString() + m[2];
  }

  return number == _number;
}

function validate_ie_se(number)
{

  number = ieClear(number);
  if (!/^\d{9}$/.test(number))
    return false;

  return number == modulo11(number.substr(0, 8));
}

function validate_ie_to(number)
{
  let m, _number;

  number = ieClear(number);
  if ((m = (/^((\d{2})\d{2}(\d{6}))\d$/.exec(number))) == null)
    return false;

  _number = m[2] + m[3];
  _number = modulo11(_number);
  _number = m[1] + _number.slice(-1);

  return _number == number;
}

/**
 * Exporting
 */
module.exports = exports = {
  validate: validate,
};
