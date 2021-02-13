export const regularExpressionMatching = (string, pattern) => {
  let stringIndex = 0;
  let patternIndex = 0;

  while (stringIndex < string.length && patternIndex < pattern.length) {
    if (
      string[stringIndex] === pattern[patternIndex] ||
      pattern[patternIndex] === "."
    ) {
      stringIndex++;
      patternIndex++;
      continue;
    }

    if (pattern[patternIndex] === "*") {
      if (
        string[stringIndex] === pattern[patternIndex - 1] ||
        pattern[patternIndex - 1] === "."
      ) {
        stringIndex++;
        continue;
      }

      if (
        string[stringIndex] === pattern[patternIndex + 1] ||
        pattern[patternIndex + 1] === "."
      ) {
        stringIndex++;
        patternIndex += 2;
        continue;
      }
    }

    if (pattern[patternIndex + 1] === "*") {
      patternIndex += 2;
      continue;
    }

    return false;
  }

  if (stringIndex < string.length && patternIndex === pattern.length) {
    return false;
  }

  if (stringIndex === string.length && patternIndex === pattern.length) {
    return true;
  }

  if (stringIndex === string.length && patternIndex < pattern.length) {
    if (pattern[patternIndex] === "*" && patternIndex + 1 === pattern.length) {
      return true;
    }
    if (
      pattern[patternIndex + 1] === "*" &&
      patternIndex + 2 === pattern.length
    ) {
      return true;
    }
  }

  return false;
};
