export const combinationSum = (candidates, target) => {
  const combos = [];

  const combinationSumRecursive = (
    candidateIndex,
    currentCandidates,
    currentSum
  ) => {
    if (currentSum === target) {
      combos.push(currentCandidates);
      return;
    }

    for (let i = candidateIndex; i < candidates.length; i++) {
      if (currentSum + candidates[i] <= target) {
        combinationSumRecursive(
          i,
          [...currentCandidates, candidates[i]],
          currentSum + candidates[i]
        );
      }
    }
  };

  combinationSumRecursive(0, [], 0);
  return combos;
};
