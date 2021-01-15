export const soe = (number) => {
  const primes = Array.from({ length: number + 1 }).map(() => true);
  primes[0] = false;
  primes[1] = false;

  for (let currPrime = 2; currPrime < primes.length; currPrime++) {
    for (let index = currPrime; currPrime * index < primes.length; index++) {
      primes[currPrime * index] = false;
    }
  }

  return primes.reduce((acc, curr, index) => {
    return curr ? [...acc, index] : acc;
  }, []);
};
