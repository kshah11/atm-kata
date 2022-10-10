const atm = (dollars) => {
  if (dollars % 10 !== 0) {
    return -1;
  }
  if (dollars === 10 || dollars === 20 || dollars === 50 || dollars === 100 || dollars === 200) {
    return 1;
  }
  return 2;
};

module.exports = atm;
