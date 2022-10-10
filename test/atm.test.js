const atm = require('../src/atm');

describe('The atm function', () => {
  test('should return -1 if the input is 1', () => {
    expect(atm(1)).toBe(-1);
  });
  test('should return -1 if the input is less than 10', () => {
    expect(atm(9)).toBe(-1);
  });
  test('should return 1 if the input is 10', () => {
    expect(atm(10)).toBe(1);
  });
  test('should return 2 if the input is 30', () => {
    expect(atm(30)).toBe(2);
  });
  test('should return -1 if the input is 25', () => {
    expect(atm(25)).toBe(-1);
  });
  test('should return -1 if the input is 28', () => {
    expect(atm(28)).toBe(-1);
  });
  test('should return 1 if the input is 20', () => {
    expect(atm(20)).toBe(1);
  });
  test('should return 1 if the input is 50', () => {
    expect(atm(50)).toBe(1);
  });
  test('should return 1 if the input is 100', () => {
    expect(atm(100)).toBe(1);
  });
});
