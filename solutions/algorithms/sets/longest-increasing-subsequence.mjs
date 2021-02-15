export const longestIncreasingSubsequence = (sequence) => {
  const sequencesTable = sequence.map(() => 1);

  for (let i = 1; i < sequencesTable.length; i++) {
    for (let j = 0; j < i; j++) {
      if (sequence[j] < sequence[i]) {
        sequencesTable[i] = Math.max(sequencesTable[i], sequencesTable[j] + 1);
      }
    }
  }

  return Math.max(...sequencesTable);
};
