export const longestCommonSubstring = (str1, str2) => {
  const table = Array.from({ length: str1.length + 1 }).map(() =>
    Array.from({ length: str2.length + 1 }).map(() => 0)
  );

  let bigIndexI = 0;
  let bigIndexJ = 0;

  for (let i = 1; i < table.length; i++) {
    for (let j = 1; j < table[0].length; j++) {
      table[i][j] = str1[i - 1] === str2[j - 1] ? table[i - 1][j - 1] + 1 : 0;

      if (table[i][j] > table[bigIndexI][bigIndexJ]) {
        bigIndexI = i;
        bigIndexJ = j;
      }
    }
  }

  let result = "";
  while (bigIndexI > 0 && bigIndexJ > 0 && table[bigIndexI][bigIndexJ] > 0) {
    result = str1[bigIndexI - 1] + result;
    bigIndexI--;
    bigIndexJ--;
  }

  return result;
};
