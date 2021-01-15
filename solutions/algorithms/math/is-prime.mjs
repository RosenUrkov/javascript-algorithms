export const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  const sqrt = Math.sqrt(number);
  for (let index = 2; index <= sqrt; index++) {
    if (number % index === 0) {
      return false;
    }
  }

  return true;
};
