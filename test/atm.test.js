const atm = require('../src/atm');

describe('The atm function', () => {
  test('should return -1 if the input is 1', () => {
    expect(atm(1)).toBe(-1);
  });
  test('should return 1 if the input is 10', () => {
    expect(atm(10)).toBe(1);
  });
});
