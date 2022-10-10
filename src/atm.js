const atm = (dollars) => {
  if (dollars % 10 !== 0) {
    return -1;
  }
  if (dollars === 10 || dollars === 20 || dollars === 50) {
    return 1;
  }
  return 2;
};

module.exports = atm;
