const atm = (dollars) => {
  if (dollars < 10) {
    return -1;
  }
  return 1;
};

module.exports = atm;
