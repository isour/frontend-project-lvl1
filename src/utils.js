const generateNumber = (min = 0, max = 100) => {
  const mmin = Math.ceil(min);
  const mmax = Math.floor(max);
  return Math.floor(Math.random() * (mmax - mmin)) + mmin;
}

export { generateNumber as default }
