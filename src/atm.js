const atm = (dollars) => {
  if (dollars < 10) {
    return -1;
  }
  if (dollars === 10) {
    return 1;
  }
  return 2;
};

module.exports = atm;
