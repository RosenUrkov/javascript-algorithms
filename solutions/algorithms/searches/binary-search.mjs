export const binarySearch = (sortedArr, target) => {
  const binarySearchRecursive = (start, end) => {
    const midIndex = Math.floor((start + end) / 2);

    if (sortedArr[midIndex] === target) {
      return midIndex;
    }
    if (start >= end) {
      return -1;
    }

    return sortedArr[midIndex] > target
      ? binarySearchRecursive(start, midIndex)
      : binarySearchRecursive(midIndex + 1, end);
  };

  return binarySearchRecursive(0, sortedArr.length);
};
