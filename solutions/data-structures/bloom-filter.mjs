import { polynomialHash } from "../algorithms/cryptography/polynomial-hash.mjs";

export const createBloomFilter = () => {
  const bitArray = Array.from({ length: 1000 });
  const hashFunctions = [
    (str) => polynomialHash(str, 13, 6063598297),
    (str) => polynomialHash(str, 17, 8075438557),
    (str) => polynomialHash(str, 31, 5836386799),
  ];

  const insert = (string) => {
    hashFunctions
      .map((hash) => hash(string))
      .forEach((value) => (bitArray[value % bitArray.length] = 1));
  };

  const includes = (string) => {
    return hashFunctions
      .map((hash) => hash(string))
      .every((value) => bitArray[value % bitArray.length] === 1);
  };

  return {
    insert,
    includes,
  };
};
