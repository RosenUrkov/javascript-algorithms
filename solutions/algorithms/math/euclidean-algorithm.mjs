export const gcd = (num1, num2) => {
  while (num1 !== num2) {
    const minNumber = Math.min(num1, num2);
    const absDiff = Math.abs(num1 - num2);

    num1 = minNumber;
    num2 = absDiff;

    if (num1 === 1) {
      return 1;
    }
  }

  return num1;
};
