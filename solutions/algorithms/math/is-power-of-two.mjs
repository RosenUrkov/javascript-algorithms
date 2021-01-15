export const isPowerOfTwo = (number) => {
  if (number < 1) {
    return false;
  }

  while (number % 2 === 0) {
    number /= 2;
  }

  return number === 1 ? true : false;
};
