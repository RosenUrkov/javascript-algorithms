import { factorial } from "./factorial.mjs";

export const pascalTriangle = (lineNumber) => {
  const lineFactorial = factorial(lineNumber);

  return Array.from({ length: 8 }).map(
    (_, i) => lineFactorial / (factorial(i) * factorial(lineNumber - i))
  );
};
