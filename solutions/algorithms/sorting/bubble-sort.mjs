export const bubbleSort = (array) => {
  const copy = [...array];

  for (let i = 0; i < copy.length; i++) {
    for (let j = 1; j < copy.length - i; j++) {
      if (copy[j] < copy[j - 1]) {
        [copy[j], copy[j - 1]] = [copy[j - 1], copy[j]];
      }
    }
  }

  return copy;
};
