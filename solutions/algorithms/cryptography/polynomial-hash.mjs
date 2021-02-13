export const polynomialHash = (string, base = 13, module = 1_000_000_007) => {
  return string.split("").reduce((hash, _, index) => {
    const charCode = string.charCodeAt(index);
    return (hash * base + charCode) % module;
  }, 0);
};
