export const interpolationSearch = (sortedArr, target) => {
  const interpolationSearchRecursive = (start, end) => {
    const index =
      start +
      Math.floor(
        ((target - sortedArr[start]) * (end - start)) /
          (sortedArr[end] - sortedArr[start])
      );

    if (sortedArr[index] === target) {
      return index;
    }
    if (start >= end) {
      return -1;
    }

    return sortedArr[index] > target
      ? interpolationSearchRecursive(start, index - 1)
      : interpolationSearchRecursive(index + 1, end);
  };

  return interpolationSearchRecursive(0, sortedArr.length - 1);
};
