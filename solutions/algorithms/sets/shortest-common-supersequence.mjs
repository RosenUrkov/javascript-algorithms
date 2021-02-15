export const shortestCommonSupersequence = (set1, set2) => {
  let table = Array.from({ length: set1.length + 1 }).map(() =>
    Array.from({ length: set2.length + 1 }).map(() => 0)
  );

  const result = [];
  for (let i = 1; i < table.length; i++) {
    for (let j = 1; j < table[0].length; j++) {
      if (set1[i - 1] === set2[j - 1]) {
        table[i][j] = table[i - 1][j - 1] + 1;
        result.push(set1[i - 1]);
      } else {
        table[i][j] = Math.max(table[i][j - 1], table[i - 1][j]);
      }
    }
  }

  result.push(...Array.from(set1).filter((x) => !result.includes(x)));
  result.push(...Array.from(set2).filter((x) => !result.includes(x)));

  return result;
};
