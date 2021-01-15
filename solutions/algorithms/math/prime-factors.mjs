export const primeFactors = (number) => {
  const factors = [];

  const sqrt = Math.sqrt(number);
  for (let index = 2; index <= sqrt; index++) {
    while (number % index === 0) {
      number = number / index;
      factors.push(index);
    }
  }

  if (number !== 1) {
    factors.push(number);
  }

  return factors;
};
