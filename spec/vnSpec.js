const vn = require('../lib/validNumber');

describe("Checking the ValidNumber Library functions", function() {

  it("Checking isCnpj(string) Function...", function() {

    expect(vn.isCnpj('02.934.311/0001-53')).toBe(true);
    expect(vn.isCnpj('02.934.311/0001-53')).toBe(true);
    expect(vn.isCnpj('s0s2s.s9s3s4s.s3s1s1s/s0s0s0s1s-s5s3s')).toBe(true);

    expect(vn.isCnpj('12.934.311/0001-53')).toBe(false);
    expect(vn.isCnpj('')).toBe(false);
    expect(vn.isCnpj()).toBe(false);

  });
});