export function hornerMethod(coeffs, x) {
  return coeffs.reduce((acc, currCoeff) => {
    return acc * x + currCoeff;
  }, 0);
}
