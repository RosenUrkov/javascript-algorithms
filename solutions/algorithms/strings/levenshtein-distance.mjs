export const levenshteinDistance = (string1, string2) => {
  const mapping = Array.from({ length: string1.length + 1 }).map(() =>
    Array.from({ length: string2.length + 1 }).map(() => 0)
  );

  for (let i = 0; i < mapping.length; i++) {
    mapping[i][0] = i;
  }
  for (let i = 0; i < mapping[0].length; i++) {
    mapping[0][i] = i;
  }

  for (let row = 1; row < mapping.length; row++) {
    for (let col = 1; col < mapping[0].length; col++) {
      const newOperationValue = string1[row] === string2[col] ? 0 : 1;
      const minimalOperations = Math.min(
        mapping[row][col - 1],
        mapping[row - 1][col],
        mapping[row - 1][col - 1]
      );

      mapping[row][col] = minimalOperations + newOperationValue;
    }
  }

  return mapping[mapping.length - 1][mapping[0].length - 1];
};
