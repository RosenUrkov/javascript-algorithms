const buildZArray = (zString) => {
  const zArray = Array.from({ length: zString.length }).map(() => 0);

  let zBoxLeftIndex = 0;
  let zBoxRightIndex = 0;

  let zBoxShift = 0;

  for (let charIndex = 1; charIndex < zString.length; charIndex += 1) {
    if (charIndex > zBoxRightIndex) {
      zBoxLeftIndex = charIndex;
      zBoxRightIndex = charIndex;

      while (
        zBoxRightIndex < zString.length &&
        zString[zBoxRightIndex - zBoxLeftIndex] === zString[zBoxRightIndex]
      ) {
        zBoxRightIndex += 1;
      }

      zArray[charIndex] = zBoxRightIndex - zBoxLeftIndex;
      zBoxRightIndex -= 1;
    } else {
      zBoxShift = charIndex - zBoxLeftIndex;

      if (zArray[zBoxShift] < zBoxRightIndex - charIndex + 1) {
        zArray[charIndex] = zArray[zBoxShift];
      } else {
        zBoxLeftIndex = charIndex;

        while (
          zBoxRightIndex < zString.length &&
          zString[zBoxRightIndex - zBoxLeftIndex] === zString[zBoxRightIndex]
        ) {
          zBoxRightIndex += 1;
        }

        zArray[charIndex] = zBoxRightIndex - zBoxLeftIndex;
        zBoxRightIndex -= 1;
      }
    }
  }

  return zArray;
};

export const zAlgorithm = (word, text) => {
  const SEPARATOR = "$";
  const wordPositions = [];

  const zString = `${word}${SEPARATOR}${text}`;
  const zArray = buildZArray(zString);

  for (let charIndex = 1; charIndex < zArray.length; charIndex += 1) {
    if (zArray[charIndex] === word.length) {
      const wordPosition = charIndex - word.length - SEPARATOR.length;
      wordPositions.push(wordPosition);
    }
  }

  return wordPositions;
};
