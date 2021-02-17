export const caesarCipher = (string) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const punctuationSymbols = [" ", ",", ".", "!", "?"];
  const shiftIndex = 23;

  return string
    .split("")
    .map((x) => {
      if (punctuationSymbols.includes(x)) {
        return x;
      }

      const index = letters.findIndex((l) => l === x);
      const replacementIndex = (index + shiftIndex) % letters.length;
      return letters[replacementIndex];
    })
    .join("");
};
