export const hammingDistance = (str1, str2) => {
  const shorterString = Math.min(str1.length, str2.length);

  const divergence = Array.from({ length: shorterString }).reduce(
    (div, _, i) => {
      return str1[i] === str2[i] ? div : div + 1;
    },
    0
  );

  return divergence + Math.abs(str1.length - str2.length);
};
