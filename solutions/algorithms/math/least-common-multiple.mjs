import { gcd } from "./euclidean-algorithm.mjs";

export const lcm = (num1, num2) => {
  if (num1 === 0 || num2 === 0) {
    return 0;
  }

  return Math.abs(num1 * num2) / gcd(num1, num2);
};
