export const selectionSort = (array) => {
  const copy = [...array];

  for (let i = 0; i < copy.length; i++) {
    let bestElIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (copy[j] < copy[bestElIndex]) {
        bestElIndex = j;
      }
    }

    [copy[i], copy[bestElIndex]] = [copy[bestElIndex], copy[i]];
  }

  return copy;
};
