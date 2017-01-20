const vd = require('../lib/validDate');

describe("Checking the ValidDate Library functions", function() {

  it("Checking isDate(dateToCheck, dateFormat) Function...", function() {

    expect(vd.isDate('19-02-2017','dmy')).toBe(true);
    expect(vd.isDate('2.19.2017','mdy')).toBe(true);
    expect(vd.isDate('19/02/2017','dmy')).toBe(true);
    expect(vd.isDate('2017/2/19')).toBe(true);

    expect(vd.isDate('2016-02-29')).toBe(true);
    expect(vd.isDate('2017-02-29')).toBe(false);
  });
});